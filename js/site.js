/* ==========================================================================
   Rendering + small interactions. Content lives in js/data.js.
   ========================================================================== */

(function () {
  "use strict";

  /* --- helpers ----------------------------------------------------------- */

  const esc = (s) =>
    String(s).replace(
      /[&<>"']/g,
      (c) =>
        ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]
    );

  const MONTHS = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");

  function formatDate(iso) {
    const [y, m, d] = iso.split("-").map(Number);
    return `${MONTHS[m - 1]} ${d}, ${y}`;
  }

  /* Bold the site owner's name inside an author list. */
  function markAuthors(authors, me) {
    const safe = esc(authors);
    const needle = esc(me);
    return safe.split(needle).join(`<span class="me">${needle}</span>`);
  }

  /* --- theme ------------------------------------------------------------- */

  function initTheme() {
    const root = document.documentElement;
    const btn = document.querySelector(".theme-toggle");
    if (!btn) return;

    /* The inline <head> script may already have switched the page to dark, in
       which case the label baked into the HTML is describing the opposite of
       what the button does. Derive it from the live theme instead of trusting
       the markup, and sync once before wiring the listener up. */
    const syncLabel = () => {
      const dark = root.getAttribute("data-theme") === "dark";
      btn.setAttribute(
        "aria-label",
        `Switch to ${dark ? "light" : "dark"} theme`
      );
    };

    syncLabel();

    btn.addEventListener("click", function () {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {
        /* private mode — theme just won't persist */
      }
      syncLabel();
    });
  }

  /* --- header / footer bits ---------------------------------------------- */

  function initChrome() {
    const brand = document.querySelector(".nav__brand");
    if (brand) {
      brand.innerHTML =
        `<strong>${esc(SITE.firstName)}</strong>` +
        `<span class="nav__mid"> ${esc(SITE.middleName)}</span> ` +
        esc(SITE.lastName);
    }

    const cvLinks = document.querySelectorAll("[data-cv]");
    cvLinks.forEach((a) => a.setAttribute("href", SITE.cv));

    const mail = document.querySelector("[data-email]");
    if (mail) mail.setAttribute("href", `mailto:${SITE.email}`);

    const year = document.querySelector("[data-year]");
    if (year) year.textContent = new Date().getFullYear();

    // Mark the current page in the navbar.
    const here = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav__link").forEach((a) => {
      const target = a.getAttribute("href");
      if (target === here || (here === "index.html" && target === "index.html")) {
        a.classList.add("is-active");
        a.setAttribute("aria-current", "page");
      }
    });
  }

  /* --- news -------------------------------------------------------------- */

  function renderNews(el) {
    el.innerHTML = NEWS.map(
      (n) => `
      <div class="news__item">
        <div class="news__date">${esc(formatDate(n.date))}</div>
        <div class="news__text">${n.html ?? esc(n.text)}</div>
      </div>`
    ).join("");
  }

  /* --- publications ------------------------------------------------------ */

  function pubLinks(p, id) {
    const links = [];
    if (p.abstract) {
      links.push(
        `<button type="button" class="chip" data-abs="${id}" aria-expanded="false" aria-controls="abs-${id}">abs</button>`
      );
    }
    if (p.arxiv) links.push(`<a class="chip" href="${esc(p.arxiv)}">arXiv</a>`);
    if (p.doi) links.push(`<a class="chip" href="${esc(p.doi)}">doi</a>`);
    if (p.url) links.push(`<a class="chip" href="${esc(p.url)}">link</a>`);
    if (p.pdf) links.push(`<a class="chip" href="${esc(p.pdf)}">pdf</a>`);
    return links.join("");
  }

  function pubItem(p, id) {
    const preview = p.preview
      ? `<div class="pub__preview"><img src="${esc(p.preview)}" alt="" loading="lazy"></div>`
      : `<div class="pub__preview"></div>`;

    const abstract = p.abstract
      ? `<div class="pub__abstract" id="abs-${id}" hidden>${esc(p.abstract)}</div>`
      : "";

    return `
      <li class="pub">
        ${preview}
        <div class="pub__meta">
          <h3 class="pub__title">${esc(p.title)}</h3>
          <p class="pub__authors">${markAuthors(p.authors, SITE.me)}</p>
          <p class="pub__venue">${esc(p.venue)}, ${esc(p.year)}</p>
          <div class="pub__links">${pubLinks(p, id)}</div>
          ${abstract}
        </div>
      </li>`;
  }

  function renderFlat(el, pubs) {
    el.innerHTML = `<ul class="pub-list">${pubs
      .map((p) => pubItem(p, PUBLICATIONS.indexOf(p)))
      .join("")}</ul>`;
  }

  function renderGrouped(el, pubs) {
    if (!pubs.length) {
      el.innerHTML = `<p class="empty">No publications match that filter.</p>`;
      return;
    }

    const years = [...new Set(pubs.map((p) => p.year))];
    el.innerHTML = years
      .map((y) => {
        const items = pubs
          .filter((p) => p.year === y)
          .map((p) => pubItem(p, PUBLICATIONS.indexOf(p)))
          .join("");
        return `<h2 class="pub-year">${esc(y)}</h2><ul class="pub-list">${items}</ul>`;
      })
      .join("");
  }

  /* Abstract toggles are delegated, so they survive re-renders. */
  function initAbstractToggles(scope) {
    scope.addEventListener("click", function (ev) {
      const btn = ev.target.closest("[data-abs]");
      if (!btn) return;
      const panel = document.getElementById(`abs-${btn.dataset.abs}`);
      if (!panel) return;
      const open = !panel.hasAttribute("hidden");
      panel.toggleAttribute("hidden", open);
      btn.setAttribute("aria-expanded", String(!open));
    });
  }

  function initFilter(input, listEl) {
    const status = document.querySelector("[data-filter-status]");
    let announce;

    const apply = () => {
      const q = input.value.trim().toLowerCase();
      const matches = !q
        ? PUBLICATIONS
        : PUBLICATIONS.filter((p) =>
            [p.title, p.authors, p.venue, p.year].join(" ").toLowerCase().includes(q)
          );
      renderGrouped(listEl, matches);

      /* Swapping the list out is silent to a screen reader, so report the count
         through the live region. Let typing settle first — announcing on every
         keystroke is worse than announcing nothing. */
      if (!status) return;
      clearTimeout(announce);
      announce = setTimeout(() => {
        const n = matches.length;
        status.textContent = !q
          ? ""
          : n === 0
            ? "No publications match that filter."
            : n === 1
              ? "1 publication matches that filter."
              : `${n} publications match that filter.`;
      }, 400);
    };

    input.addEventListener("input", apply);
    apply();
  }

  /* --- boot -------------------------------------------------------------- */

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initChrome();

    const newsEl = document.querySelector("[data-news]");
    if (newsEl) renderNews(newsEl);

    const selectedEl = document.querySelector("[data-selected-pubs]");
    if (selectedEl) {
      renderFlat(selectedEl, PUBLICATIONS.filter((p) => p.selected));
      initAbstractToggles(selectedEl);
    }

    const allEl = document.querySelector("[data-all-pubs]");
    if (allEl) {
      const filter = document.querySelector("[data-filter]");
      if (filter) {
        initFilter(filter, allEl);
      } else {
        renderGrouped(allEl, PUBLICATIONS);
      }
      initAbstractToggles(allEl);
    }
  });
})();
