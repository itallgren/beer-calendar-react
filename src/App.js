import "./App.css";
import { useState } from "react";
import beers from "./beers";
import beerCategories from "./beerCategories";

import Header from "./components/header";
import Card from "./components/card";
import Footer from "./components/footer";

const App = () => {
  const [beersToShow, setBeersToShow] = useState(beers);
  const [filterActive, setFilterActive] = useState(true);

  const filterCategories = (category) => {
    const results = beers.filter((beer) => beer.category === category);
    setBeersToShow(results);
    setFilterActive(false);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <div className="filter">
          <h4>filter by category</h4>
          <button
            className="remove"
            hidden={filterActive}
            onClick={() => {
              setBeersToShow(beers);
              setFilterActive(true);
            }}
          >
            <i className="fas fa-times"></i>
          </button>
          {beerCategories.map((category) => (
            <button
              href="#"
              className="category filter-category"
              onClick={() => filterCategories(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid">
          {beersToShow.map((beer) => (
            <Card beer={beer} key={beer.id} />
          ))}
        </div>
      </main>
      <Footer />
      <a href="#" className="to-top">
        <i className="fas fa-arrow-up" />
      </a>
    </div>
  );
};

export default App;
