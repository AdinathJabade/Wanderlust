# Tripster

Tripster is a full-stack web application for listing and browsing rental properties from around the world. Built with Node.js, Express, MongoDB, and EJS, it provides a simple and interactive platform for users to view, create, edit, and delete property listings, leave reviews, and manage user accounts.

---

## 🌍 Features

- **View Listings:** Browse all available rental properties with details like title, description, price, location, and country.
- **Create Listings:** Add new properties with images, price, and location.
- **Edit Listings:** Update property details interactively.
- **Delete Listings:** Remove properties from the database.
- **Search Listings:** Search by country or location.
- **User Authentication:** Sign up, log in, and log out securely using Passport.js.
- **Review System:** Add and delete reviews for listings.
- **MongoDB Integration:** Persistent data storage for all listings, users, and reviews.
- **EJS Templating:** Dynamic and responsive UI for all pages.
- **Bootstrap Styling:** Modern, responsive forms and buttons using Bootstrap.
- **Cloudinary Integration:** Upload and store listing images in the cloud.
- **Flash Messages:** User feedback for actions (success/error).

---

## 📁 Folder Structure

```
Tripster-Webapp/
│
├── app.js                # Main Express application
├── package.json          # Project metadata and dependencies
├── cloudConfig.js        # Cloudinary config for image uploads
├── middleware.js         # Custom middleware functions
├── schema.js             # Joi validation schemas
│
├── models/
│   ├── listing.js        # Mongoose schema for listings
│   ├── review.js         # Mongoose schema for reviews
│   └── user.js           # Mongoose schema for users
│
├── controllers/
│   ├── listings.js       # Listing CRUD logic
│   ├── reviews.js        # Review logic
│   └── users.js          # User authentication logic
│
├── routes/
│   ├── listing.js        # Listing routes
│   ├── review.js         # Review routes
│   └── user.js           # User routes
│
├── init/
│   ├── data.js           # Sample listings data
│   └── index.js          # DB initialization script
│
├── utils/
│   ├── ExpressError.js   # Custom error class
│   └── geocoder.js       # Geocoding utility
│
├── public/
│   ├── assets/           # Images and static assets
│   ├── css/              # Stylesheets
│   └── js/               # Client-side scripts
│
├── views/
│   ├── error.ejs         # Error page
│   ├── landing.ejs       # Landing page
│   ├── includes/         # Navbar, footer, flash messages
│   ├── layouts/          # Boilerplate layout
│   ├── listings/         # Listing views (index, show, new, edit)
│   └── users/            # User views (login, signup)
│
└── README.md             # Project documentation
```

---

## 🏗️ Architecture & Main Components

- **app.js:** Entry point, sets up Express, middleware, session, Passport.js, routes, error handling, and server.
- **cloudConfig.js:** Configures Cloudinary for image uploads using multer-storage-cloudinary.
- **middleware.js:** Contains authentication and authorization logic (isLoggedIn, isOwner, isReviewOwner, saveRedirectUrl).
- **controllers/:** Business logic for listings, reviews, and users.
- **models/:** Mongoose schemas for listings, reviews, and users.
- **routes/:** Express routers for listings, reviews, and users.
- **init/:** Database initialization and sample data.
- **views/:** EJS templates for all pages, using Bootstrap for styling.
- **public/:** Static assets (CSS, JS, images).

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. **Clone the repository:**
   ```powershell
   git clone https://github.com/AdinathJabade/tripster.git
   cd Tripster-Webapp
   ```
2. **Install dependencies:**
   ```powershell
   npm install
   ```
3. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add your MongoDB URI and Cloudinary credentials:
     ```env
     MONGO_URI=mongodb://localhost:27017/tripster
     PORT=8080
     CLOUD_NAME=your_cloudinary_name
     CLOUD_API_KEY=your_cloudinary_api_key
     CLOUD_API_SECRET=your_cloudinary_api_secret
     SECRET=your_session_secret
     ```
4. **Initialize the database with sample data (optional):**
   ```powershell
   node ./init/index.js
   ```
5. **Start the server:**
   ```powershell
   node app.js
   ```
6. **Visit the app:**
   Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## 🖥️ Usage

- **Home Page:** Shows a welcome message.
- **/listings:** View all property listings.
- **/listings/new:** Add a new listing (form uses Bootstrap for styling).
- **/listings/:id:** View details of a specific listing.
- **/listings/:id/edit:** Edit a listing.
- **Delete:** Use the delete button on a listing's detail page.
- **Reviews:** Add/delete reviews for listings.
- **User Auth:** Sign up, log in, log out.

---

## 📦 Dependencies

- express
- mongoose
- dotenv
- ejs
- ejs-mate
- method-override
- connect-flash
- connect-mongo
- passport
- passport-local
- joi
- multer
- cloudinary
- multer-storage-cloudinary

---

## 👤 Author

- [Adinath Jabade](https://github.com/AdinathJabade)

---

## 📜 License

This project is licensed under the ISC License.

---

## 📝 Interactive Demo

To try out the app locally, follow the setup steps above. You can add, edit, and delete listings, sign up/log in, and leave reviews interactively through the web interface.

---

## 💡 Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements, bug fixes, or new features.

---

## 🙋‍♂️ Support

For questions or support, open an issue on GitHub or contact the author.

---

## 🎉 Happy Exploring!
