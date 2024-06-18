import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./Componets/Navbar";
import Home from "./Componets/Home";
import AddPostForm from "./Componets/AddPostForm";
import Contact from "./Componets/contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Home/>
    <AddPostForm/>
    <Contact/>

  </React.StrictMode>
);
reportWebVitals();
