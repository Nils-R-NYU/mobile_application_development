import React from "react";
import "./global.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecipePage from "./pages/RecipePage";

function App() {
  return (
    <>
      <Header />
      <RecipePage />
      <Footer />
    </>
  );
}

export default App;
