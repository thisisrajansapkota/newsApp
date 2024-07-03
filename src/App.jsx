import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NewsBoard from "./Components/NewsBoard/NewsBoard";
import NewsItem from "./Components/NewsItem/NewsItem";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("general");

  return (
    <>
      <NavigationBar setCategory= {setCategory} />
      {/* <h1>2538</h1> */}
      <NewsBoard  category= {category} />
      <NewsItem />
    </>
  );
}

export default App;
