# Shalashian Santhiya Arokiyamary – Portfolio

React + Vite portfolio website with animations and an app-style mobile view
(bottom tab bar, swipe cards, splash screen).

## Run it

```bash
npm install
npm run dev        # open the address it prints (http://localhost:5173)
```

Build for hosting: `npm run build` (output goes to `dist/`, upload that folder to
Netlify, Vercel, GitHub Pages, etc.).

## Things to change before you publish

1. **Contact details** – open `src/data.js` and edit the `contact` object
   (email, phone, WhatsApp number, LinkedIn, Facebook). Anything left as `''`
   is hidden automatically. The email is a placeholder right now.
2. **Photo** – copy your photo into the `public` folder and name it `photo.jpg`.
   Until then a gradient monogram (SA) is shown.
3. **Check the details** – name spelling, job titles and dates in `src/data.js`
   were read from the profile screenshots. Please verify them.
4. **Colours** – change `--a1`, `--a2`, `--a3` at the top of `src/styles.css`.

## What is where

| File | What it controls |
| --- | --- |
| `src/data.js` | all text: name, roles, about, experience, education, contact |
| `src/styles.css` | all colours, layout and animations (mobile view is the `max-width:900px` block) |
| `src/anim.jsx` | scroll reveal, count-up numbers, letter animation, typewriter, 3D tilt |
| `src/components/` | one file per section |

Personal details such as birthday, marital status and family were left out on
purpose. A public portfolio does not need them.
