# 📝 Express & MongoDB Post REST API Assignment

A modular RESTful API built with **Node.js**, **Express.js**, **MongoDB**, and **Mongoose ODM**. This project demonstrates persistent CRUD operations for blog/forum posts stored inside a local MongoDB database (Compass).
---

## 🚀 Tech Stack

* **Backend Framework:** Node.js & Express.js
* **Database & ODM:** MongoDB & Mongoose
* **Development Tools:** Nodemon, CORS, Dotenv

---

## 🛠️ Project Folder Structure

```text
post-db-backend/
├── config/
│   └── db.js                 # MongoDB connection logic (mongoose.connect)
├── models/
│   └── postModel.js          # Post Mongoose Schema & Model definition
├── controllers/
│   └── postController.js     # Controller business logic (find, save, findByIdAndDelete, etc.)
├── routes/
│   └── postRoutes.js         # REST endpoint declarations
├── .gitignore                # Git untracked files configuration
├── index.js                  # Express app entry point
├── package.json              # Dependencies and start scripts
└── README.md                 # Project documentation