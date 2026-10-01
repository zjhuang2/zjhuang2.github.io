# zjhuang2.github.io

Plain HTML/CSS/JS. No build step, no dependencies — open `index.html` in a
browser, or serve the folder and it works.

## Files

```
index.html          home: bio, news, selected publications
publications.html   full list, grouped by year, with a filter box
css/style.css       all styling (design tokens at the top)
js/data.js          ← all content lives here
js/site.js          rendering + theme toggle + filter
assets/img/         portrait + publication previews
assets/pdf/         papers and CV
```

## Editing content

Everything you'd normally update is in **`js/data.js`**.

**Add a news item** — put it at the top of `NEWS`:

```js
{ date: "2026-03-01", text: "Something happened." },
```

**Add a paper** — put it at the top of `PUBLICATIONS`:

```js
{
  year: 2026,
  title: "Paper Title",
  authors: "Jeremy Zhengqi Huang, Someone Else, and Dhruv Jain",
  venue: "Proceedings of Something (VENUE '26)",
  preview: "assets/img/pub/my-paper.png",   // optional
  doi: "https://doi.org/...",               // optional
  pdf: "assets/pdf/my-paper.pdf",           // optional
  arxiv: "https://arxiv.org/abs/...",       // optional
  url: "https://...",                       // optional
  abstract: `...`,                          // optional — adds an ABS toggle
  selected: true,                           // also show it on the home page
},
```

Your own name is bolded automatically in author lists (it matches `SITE.me`).
Preview images are cropped to 16:10, so ~800×500 or wider works well.

**Change the bio, portrait, or links** — edit `index.html` directly (the bio
paragraphs and social links are plain markup). Email / Scholar / LinkedIn / X
URLs also live in `SITE` in `js/data.js` for the ones rendered by script.

**New CV** — replace `assets/pdf/huang-cv.pdf`.

## Styling

`css/style.css` starts with two blocks of CSS custom properties: `:root` for
light mode and `:root[data-theme="dark"]` for dark. Change `--accent`, `--bg`,
or `--border` there and it propagates everywhere. The look borrows from Meta's
AI blog: light mode is white with a slate-navy ink (`#1c2b33`), cool blue-grey
secondary text, light grey surfaces (`#f1f4f7`), and Meta blue (`#0064e0`) as
the accent; dark mode is a deep slate (`#0d161c`) with a lighter blue
(`#4c9dff`).

The neutrals all lean slightly blue so they sit with the accent. If you change
the accent to a warm hue, cool greys will read as the wrong temperature, so
shift them too. `--on-accent` is the text colour on a solid accent fill (the
CV button): white in light mode, ink in dark mode, because white on the
lighter dark-mode blue fails contrast.

Components are mostly pills: nav links, the CV button, publication chips
(outbound ones get a ↗ arrow), the filter box, and the year tags on the
publications page. Social icons are circles. Images get rounded corners.

One typeface, **Wix Madefor Text**, from Google Fonts (loaded in each page's
`<head>`). It is variable from 400 to 800 with real italics, so emphasis uses
weight: "Jeremy" is bolder than "Zhengqi Huang". It sets wider than most UI
faces, which is why the nav has an extra tightening step below 360px.

The navbar's frosted-glass effect is `backdrop-filter: saturate(180%) blur(18px)`
on `.nav`, with an opaque fallback for browsers that don't support it.

## Local preview

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

## Deploying to GitHub Pages

Push these files to the root of `zjhuang2.github.io` and Pages serves them
as-is. `.nojekyll` tells GitHub not to run Jekyll over the folder.

`current_site/` is the old al-folio site, kept for reference — delete it before
publishing, or move it out of the repo.
