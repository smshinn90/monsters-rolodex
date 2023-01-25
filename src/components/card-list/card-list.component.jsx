import { Component } from "react";
import "../card/card.component";
import Card from "../card/card.component";

import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          <Card monsterObject={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
