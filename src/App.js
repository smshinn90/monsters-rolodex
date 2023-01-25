import { Component } from "react";

import CardList from "./components/card-list/card-list.component";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";
// eslint-disable-next-line
import { render } from "@testing-library/react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log("render main");
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    // eslint-disable-next-line
    const filteredMonsters = monsters.filter((search) => {
      return search.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search monsters"
          className="monsters-search-box"
        />
        {/* {filteredMonsters.map((monster) => {
          return (
            <div key={monster.name}>
              <h1>{monster.name}</h1>
            </div>
          );
        })} */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
