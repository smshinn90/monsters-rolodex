import { Component } from "react";

class CardList extends Component {
  render() {
    console.log("render from cardlist");
    const { monsters } = this.props;
    console.log(monsters.length);
    return (
      <div>
        {monsters.map((monster) => (
          <h1>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;
