# childcarewithlove

Website for Dr. Chetan Yadav (Occupational Therapist) \u2014 built with React, Vite, Tailwind CSS
and React Router.

## What's in this project

```
childcarewithlove/
  index.html              Page shell, SEO meta tags
  src/
    App.jsx               Routes + layout (Navbar/Footer wrap every page)
    main.jsx              App entry point
    index.css             Global styles, focus states, animation helpers
    data/content.js        <-- MOST TEXT ON THE SITE LIVES HERE, edit this first
    components/           Navbar, Footer, Hero, ServiceCards, AboutPreview,
                           Testimonials, ContactForm, ContactSection, FloatingShapes
    pages/                Home.jsx, About.jsx, Services.jsx, Contact.jsx
    hooks/useReveal.js     Scroll-in-view animation hook
```

To change names, phone number, address, services or testimonials, edit
`src/data/content.js` \u2014 you don't need to touch anything else.

## Running this on Replit (recommended \u2014 works from a phone browser)

1. Go to replit.com and sign in (free account is fine).
2. Tap **Create App / Create Repl**.
3. Choose **Import from GitHub** if you've pushed this folder to a GitHub repo,
   *or* choose a blank **Node.js** template and upload/drag in all the files
   from this project (keeping the folder structure above).
4. Once the files are in, open the **Shell** tab and run:
   ```
   npm install
   ```
5. Then run:
   ```
   npm run dev
   ```
   Replit will show a webview with the live site. The `.replit` file included
   here is already configured to do steps 4\u20135 automatically when you press
   the **Run** button.
6. To get a permanent public link, use Replit's **Deploy** button (top right)
   once you're happy with the site \u2014 this builds and hosts the production
   version for you.

## Running locally (if you ever get a laptop)

```
npm install
npm run dev       # start a local dev server
npm run build     # create a production build in /dist
npm run preview   # preview the production build
```

## Connecting the contact form to a real inbox

Right now, submitting the contact form shows a success message but does not
send an email anywhere \u2014 it's wired up so a real service can be dropped in.
Open `src/components/ContactForm.jsx` and look for the comment block that
starts with `EDIT ME`. A simple option for beginners is a free service like
Formspree (formspree.io): create a form endpoint there, then replace the
commented-out `fetch(...)` call with your endpoint URL.

## Before going live

- Replace the sample testimonials in `src/data/content.js` with real,
  consented client testimonials.
- Add the real Google Maps embed URL in `src/pages/Contact.jsx` (search for
  "Map placeholder").
- Add real social media links to `socialLinks` in `src/data/content.js`, if any.
