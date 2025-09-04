# Tripster

> A lightweight rental property listing platform built with Node.js, Express, MongoDB, EJS, Cloudinary and LocationIQ.

Live site: https://tripster-vioz.onrender.com

---

## Why this repo

Tripster lets users browse, post, edit, and remove rental listings with image uploads and geocoded locations. It includes account-signup/login (Passport), per-listing reviews, Cloudinary image storage, and LocationIQ geocoding.

This README is intentionally focused: what you need to run, deploy (Render), and troubleshoot.

---

## Quick features

- Listings: create, read, update, delete (CRUD)
- Image uploads via Cloudinary
- Location geocoding via LocationIQ (node-geocoder)
- User auth with Passport (local)
- Reviews per listing
- Server-side validation (Joi)

---

## Quick start (local)

1. Clone and install

```powershell
git clone https://github.com/AdinathJabade/tripster.git
cd Tripster-Webapp
npm install
```

2. Create `.env` (example)

```env
PORT=8080
MONGO_URI=your_mongo_connection_string
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
SECRET=a_long_random_session_secret
LOCATIONIQ_API_KEY=your_locationiq_key
```

3. (Optional) seed sample data

```powershell
node ./init/index.js
```

4. Run

```powershell
node app.js
```

Open http://localhost:8080

---

## Deploying to Render (short guide)

1. Create a new Web Service on Render and connect your Git repo.
2. Set the build command to `npm install` and start command to `node app.js`.
3. Add environment variables in Render's dashboard (same keys as local `.env`).
4. Deploy. Your service will be served at `https://<your-service>.onrender.com` — your project is live at the URL above.

Notes:
- Make sure `MONGO_URI`, Cloudinary and `LOCATIONIQ_API_KEY` are set in Render.
- If you use a free LocationIQ key, check request limits.

---

## Important files & where to look

- `app.js` — express setup, session store, passport, route mounting, and error handling
- `routes/` — `listing.js`, `review.js`, `user.js` (routes and validation)
- `controllers/` — listing, review, and user controllers (business logic)
- `models/` — Mongoose schemas for `Listing`, `Review`, `User`
- `utils/geocoder.js` — node-geocoder configured for LocationIQ (reads `LOCATIONIQ_API_KEY`)
- `cloudConfig.js` — Cloudinary & multer storage
- `views/` — EJS templates (Bootstrap)

---

## Environment variables (quick reference)

- `PORT` — app port (default 8080)
- `MONGO_URI` — MongoDB connection string
- `CLOUD_NAME`, `CLOUD_API_KEY`, `CLOUD_API_SECRET` — Cloudinary credentials
- `SECRET` — session secret
- `LOCATIONIQ_API_KEY` — LocationIQ access token

---

## Troubleshooting

- Geocoding blocked / errors: Ensure `LOCATIONIQ_API_KEY` is present. If you were using OpenStreetMap directly, make sure the user-agent header is set (Nominatim blocks anonymous/bulk traffic). This project uses LocationIQ by default.
- Image upload errors: Verify Cloudinary creds in Render or `.env` and that `cloudConfig.js` reads from env vars.
- Sessions not persisting: Confirm `MONGO_URI` is correct and `connect-mongo` store is connecting (app logs show connection errors).
- Server errors: check Render build logs or local console output. The app renders `error.ejs` for unexpected errors.

---

## Helpful next steps I can do for you

- Add a `/health` endpoint and a tiny `Procfile` for Render.
- Add a short `deploy-to-render.md` with exact steps and environment variable examples.
- Create an automated health-check script and basic tests.

Tell me which of these you want and I'll implement it.

---

© Tripster — Maintained by Adinath Jabade

