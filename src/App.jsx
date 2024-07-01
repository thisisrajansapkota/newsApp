import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NewsBoard from "./Components/NewsBoard/NewsBoard";
import NewsItem from "./Components/NewsItem/NewsItem";
import NavigationBar from "./Components/NavigationBar/NavigationBar";

function App() {
  return (
    <>
      <NavigationBar />
      <h1>2538</h1>
      <NewsBoard />
      <NewsItem />
    </>
  );
}

export default App;
