import "./App.css";
import beers from "./beers";

import Card from "./components/card";

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>beer calendar</h1>
        <h2>2020</h2>
      </header>
      <main>
        <div className="filter">
          <h4>filter by category</h4>
          <button className="remove" hidden>
            <i className="fas fa-times"></i>
          </button>
          <button href="#" className="category filter-category">
            Pale ale
          </button>
          <button href="#" className="category filter-category">
            IPA
          </button>
          <button href="#" className="category filter-category">
            Enlgish shit
          </button>
          <button href="#" className="category filter-category">
            Irish
          </button>
        </div>
        <div className="grid">
          {beers.map((beer) => (
            <Card beer={beer} key={beer.id} />
          ))}
        </div>
      </main>
      <footer>
        <p className="beers-emoji">🍻</p>
        <p className="footer-text">made with 💙 in vaasa</p>
      </footer>
      <a href="#" className="to-top">
        <i className="fas fa-arrow-up" />
      </a>
    </div>
  );
};

export default App;
