# WanderLust

WanderLust is a full-stack web application for listing and browsing rental properties from around the world. Built with Node.js, Express, MongoDB, and EJS, it provides a simple and interactive platform for users to view, create, edit, and delete property listings.

---

## 🌍 Features

- **View Listings:** Browse all available rental properties with details like title, description, price, location, and country.
- **Create Listings:** Add new properties with images, price, and location.
- **Edit Listings:** Update property details interactively.
- **Delete Listings:** Remove properties from the database.
- **MongoDB Integration:** Persistent data storage for all listings.
- **EJS Templating:** Dynamic and responsive UI for all pages.

---

## 📁 Folder Structure

```
wanderlust_part1/
│
├── app.js                # Main Express application
├── package.json          # Project metadata and dependencies
├── .gitignore            # Files/folders to ignore in git
│
├── models/
│   └── listing.js        # Mongoose schema for listings
│
├── init/
│   ├── data.js           # Sample listings data
│   └── index.js          # DB initialization script
│
├── views/
│   └── listings/
│       ├── index.ejs     # All listings page
│       ├── show.ejs      # Single listing details
│       ├── new.ejs       # Create new listing
│       └── edit.ejs      # Edit listing
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. **Clone the repository:**
   ```powershell
   git clone https://github.com/AdinathJabade/Wanderlust.git
   cd wanderlust_part1
   ```
2. **Install dependencies:**
   ```powershell
   npm install
   ```
3. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add your MongoDB URI:
     ```env
     MONGO_URI=mongodb://localhost:27017/wanderlust
     PORT=3000
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
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🖥️ Usage

- **Home Page:** Shows a welcome message.
- **/listings:** View all property listings.
- **/listings/new:** Add a new listing.
- **/listings/:id:** View details of a specific listing.
- **/listings/:id/edit:** Edit a listing.
- **Delete:** Use the delete button on a listing's detail page.

---

## 📦 Dependencies

- express
- mongoose
- dotenv
- ejs
- method-override

---

## 👤 Author

- [Adinath Jabade](https://github.com/AdinathJabade)

---

## 📜 License

This project is licensed under the ISC License.

---

## 📝 Interactive Demo

To try out the app locally, follow the setup steps above. You can add, edit, and delete listings interactively through the web interface.

---

## 💡 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 🙋‍♂️ Support

For questions or support, open an issue on GitHub.

---

## 🎉 Happy Exploring!
