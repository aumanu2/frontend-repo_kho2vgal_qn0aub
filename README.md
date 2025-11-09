# simpel

A minimalist, responsive single-page app to find the exact anime episode and timestamp from a screenshot. Upload an image or paste an image URL and the app searches the trace.moe index for matching scenes.

## Features

- Drag & drop or click-to-upload image search
- Paste an image URL anywhere on the page to search instantly
- Clear, focused interface with four states: idle, loading, results, and no results
- Results grid with quick links to AniList (title, episode, timestamp, similarity)
- Sticky translucent header and a transparent footer with social links
- Mobile-first, responsive layout

## Tech Stack

- Frontend: React (Vite)
- Styling: Tailwind CSS
- Icons/animations: Lucide + Framer Motion available (used sparingly)
- 3D: Spline support pre-installed (not used by default)
- API: [trace.moe](https://soruly.github.io/trace.moe-api/#/)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Install & Run

```bash
npm install
npm run dev
```

The app will be available at:

- Local: http://localhost:3000

### Build for Production

```bash
npm run build
npm run preview
```

## How It Works

- Image File Search: Sends a POST request to `https://api.trace.moe/search` with `FormData('image')`.
- Image URL Search: Sends a GET request to `https://api.trace.moe/search?url=...`.
- The app manages UI modes: `idle` (dropzone), `loading` (spinner), `results` (grid), and `noresult` (helpful message + retry).
- Pasting an image URL anywhere on the page will trigger a search automatically.

## Project Structure (Overview)

- Header: Sticky, semi-transparent top bar with the app title
- Intro Hero: Simple title “Cari adegan anime”
- Dropzone: File drag/drop and click-select control
- Results: Responsive grid of matches; clicking opens AniList
- Responsive Container: Consistent max-width and page padding
- Footer: Transparent with top border and GitHub/LinkedIn links

## Configuration

- Footer links: Update the GitHub and LinkedIn URLs in the footer component to point to your profiles.
- Styling: Tailwind classes can be adjusted component-by-component.

## Accessibility

- Keyboard and screen reader-friendly states and controls
- Focus styles on interactive elements
- Semantic markup for headers, main sections, and controls

## Notes on API Usage

- trace.moe is a public API with its own usage limits. Consider using an API key or proxy if you expect high traffic. See the official docs for details and rate limits.

## Deployment

- Any static host (Vercel, Netlify, GitHub Pages) works. Build with `npm run build` and deploy the `dist` folder.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to the branch: `git push origin feat/your-feature`
5. Open a Pull Request

## License

MIT License. See LICENSE if provided, otherwise the project is distributed under MIT terms by default.

## Acknowledgements

- trace.moe for the search API
- AniList for title metadata and deep links
- Tailwind CSS for utility-first styling

---

## Pushing to GitHub

You can push this project to your GitHub repository with the following commands. Replace the remote URL with your own if needed.

```bash
echo "# simpel" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/otaruram/simpel.git
git push -u origin main
```

If your repository already exists with content, use:

```bash
git init
git add .
git commit -m "chore: bootstrap project"
git branch -M main
git remote add origin https://github.com/otaruram/simpel.git
# or update the existing remote
# git remote set-url origin https://github.com/otaruram/simpel.git
git push -u origin main
```
