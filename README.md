# Flywings Aviation Training

A responsive, multi-page website for **Flywings Simulator Training Centre**, an aviation training institute in India offering cabin crew, ground staff, hospitality, customer service and drone pilot programs. It is built with React and uses a luxury dark and gold design.

## Features

- Multi-page site with short, readable URLs such as `/about-us` and `/courses/cabin-crew`
- Responsive layout for phones, tablets, laptops and desktops
- Hero background video that loads lazily, with a still photo shown while it loads
- Reusable components: FAQ section, partner logo strip, testimonial, enquiry form and call-to-action band
- Course and campus pages generated from a single data file
- Enquiry form that opens the visitor's email app, since the site has no backend
- Footer with links to Instagram, Twitter, Facebook, WhatsApp and email

## Pages

| URL | Page |
| --- | --- |
| `/` | Home |
| `/about-us` | About us |
| `/campus`, `/campus/gurgaon`, `/campus/delhi` | Campuses |
| `/courses`, `/courses/cabin-crew`, `/courses/ground-staff`, `/courses/hospitality`, `/courses/customer-service`, `/courses/drone-training` | Courses |
| `/gallery` | Gallery |
| `/testimonials` | Testimonials |
| `/investors` | Investors |
| `/leadership` | Leadership |
| `/blog` | Blog |
| `/contact-us` | Contact and admission enquiry |
| `/privacy-policy`, `/terms-and-conditions` | Legal pages |

## Tech stack

- [React](https://react.dev) 19
- [Vite](https://vite.dev) 8
- [React Router](https://reactrouter.com) 7
- [Oxlint](https://oxc.rs) for linting
- Plain CSS with design tokens in `src/index.css`

## Getting started

You need [Node.js](https://nodejs.org) 20.19 or newer and [Git](https://git-scm.com).

```bash
git clone https://github.com/keshav782/Aviation-Training-.git
cd Aviation-Training-
npm install
npm run dev
```

Then open the address Vite prints in the terminal, usually `http://localhost:5173`.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build in `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Checks the code with Oxlint |

## Project structure

```
src/
  assets/          Hero video and images
  components/      Layout (header and footer), Logo, Icons, LazyVideo and shared UI
  data/            Site content (site.js) and legal text (legal.js)
  pages/           One file per page group
  App.jsx          Routes
  images.js        Image and video imports
  index.css        All styles
```

To change the phone number, emails, courses, campuses or FAQs, edit `src/data/site.js`.

## Deploying

Run `npm run build` and upload the `dist/` folder to any static host such as Netlify, Vercel or GitHub Pages. The site uses client-side routing, so set the host to serve `index.html` for every URL. Otherwise opening a page like `/about-us` directly will show a 404.

## Notes

- The Twitter link in the footer is a placeholder (`https://x.com/`). Replace it with the real profile in `src/data/site.js`.
- Content and images are based on [fwstc.in](https://fwstc.in). The design is original.
