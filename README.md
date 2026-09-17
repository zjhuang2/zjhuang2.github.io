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
or `--border` there and it propagates everywhere. Light mode is a warm
near-white (`#fcfcfb`) with warm neutral text and a muted scarlet accent
(`#a44b3a`); dark mode is a warm charcoal with a lighter scarlet (`#dd6957`).

The whole palette sits on one warm axis: the accent is hue 10, and the ink,
greys, and borders are all hue 15–23 at low saturation. If you change the
accent hue, shift those with it or the greys will read as the wrong
temperature.

Two typefaces, both from Google Fonts (loaded in each page's `<head>`):

- **Castoro** (`--font-head`) for headings — navbar, your name, section titles,
  year markers, publication titles.
- **Inter** (`--font`) for everything else — body copy, author lists, chips.

Castoro ships Regular and Italic only, with **no bold weight**. Asking for
`font-weight: 600` or `700` on a Castoro element makes the browser fake it, and
it looks muddy — so emphasis in headings is done with color instead. That is why
"Jeremy" is darker than "Zhengqi Huang" rather than bolder.

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
