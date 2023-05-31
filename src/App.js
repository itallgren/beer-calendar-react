import { useState } from "react";
import beers from "./beers";
import beerCategories from "./beerCategories";

import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

const App = () => {
  const [beersToShow, setBeersToShow] = useState(beers);
  const [filterActive, setFilterActive] = useState(false);

  var i = 0;

  const filterCategories = (category) => {
    const results = beers.filter((beer) => beer.category === category);
    setBeersToShow(results);
    setFilterActive(true);
  };

  const sortBeers = (sortingMethod) => {
    if (sortingMethod ===  "highToLow") {
      const sortedBeers = beersToShow.slice(0).sort((a, b) => b.rating - a.rating);
      setBeersToShow(sortedBeers);
    } else if (sortingMethod === "lowToHigh") {
      const sortedBeers = beersToShow.slice(0).sort((a, b) => a.rating - b.rating);
      setBeersToShow(sortedBeers);
    } else {
      return;
    }
  };

  return (
    <div className="App">
      <Header />
      <main>
        <div className="filter">
          <h4>filter by category</h4>
          <button
            className="remove"
            hidden={!filterActive}
            onClick={() => {
              setBeersToShow(beers);
              setFilterActive(false);
            }}
          >
            <i className="fas fa-times"></i>
          </button>
          {beerCategories.map((category) => (
            <button key={i++}
              className="category filter-category"
              onClick={() => filterCategories(category)}
            >
              {category}
            </button>
          ))}
          <div className="sort">
            <h4>sort by rating</h4>
            <select
              name="sorting"
              id="sorting"
              onChange={(event) => sortBeers(event.target.value)}
            >
              <option className="sortingOption" value="noSort"></option>
              <option className="sortingOption" value="lowToHigh">
                Lowest to highest
              </option>
              <option className="sortingOption" value="highToLow">
                Highest to lowest
              </option>
            </select>
          </div>
        </div>
        <div className="grid">
          {beersToShow.map((beer) => (
            <Card beer={beer} key={beer.id} />
          ))}
        </div>
      </main>
      <Footer />
      <span
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="to-top"
      >
        <i className="fas fa-arrow-up" />
      </span>
    </div>
  );
};

export default App;
