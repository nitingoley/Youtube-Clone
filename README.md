# YouTube Clone

A modern YouTube-inspired web app built with **React**, **Redux**, **Firebase Authentication**, **React Router**, **Bootstrap**, and **SCSS**.  
This project demonstrates a scalable, modular frontend architecture with responsive design and Google authentication.

---

## ✨ Features

- 🔑 Google Authentication (via Firebase)
- 🏠 Home screen with video grid and categories bar
- 📚 Sidebar navigation with logout
- 🔍 Search page (stub)
- 🎨 Responsive UI using **React Bootstrap** and custom **SCSS**
- 🗂️ Modular component structure
- 🛠️ State management with Redux

---

## 🚀 Getting Started

### 1. Install dependencies

```sh
npm install 

. Start the development server
npm run dev
.Build for production
npm run build 

🛠️ Tech Stack
React
Redux
Firebase Auth
React Router
React Bootstrap
SCSS
Vite  

📁 Project Structure 

frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── categoriesBar/
│   │   ├── header/
│   │   ├── sidebar/
│   │   └── video/
│   ├── pages/
│   ├── redux/
│   │   ├── actions/
│   │   ├── reducers/
│   │   └── [store.js](http://_vscodecontentref_/1)
│   ├── screens/
│   │   ├── homescreen/
│   │   └── loginScreen/
│   ├── [_app.scss](http://_vscodecontentref_/2)
│   ├── [_base.scss](http://_vscodecontentref_/3)
│   ├── [App.jsx](http://_vscodecontentref_/4)
│   ├── [firebase.js](http://_vscodecontentref_/5)
│   ├── [main.jsx](http://_vscodecontentref_/6)
│   └── [index.css](http://_vscodecontentref_/7)
├── [package.json](http://_vscodecontentref_/8)
└── [README.md](http://_vscodecontentref_/9) 


🎨 Styling
Bootstrap is used for layout and responsive design.
SCSS is used for custom component styles, with each component having its own SCSS partial for maintainability.
Global styles and variables are defined in src/_base.scss. 



🔒 Authentication
Google sign-in is implemented using Firebase.
Auth state is managed with Redux and persisted in sessionStorage. 


📄 License
This project is for educational purposes only. 



🙏 Credits
Inspired by YouTube’s UI/UX.
Built with React Bootstrap and Firebase.


Happy Coding! 
Nitingoley42@gmail.com

