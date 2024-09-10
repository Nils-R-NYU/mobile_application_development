import React from "react";
import RecipeCard from "./RecipeCard";
import './global.css';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <RecipeCard />
      <Footer />
    </>
  );
}

export default App;
