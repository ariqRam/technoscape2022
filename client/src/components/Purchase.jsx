import { useState } from "react";
import { useParams } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

import games from "../static/games";

const Purchase = () => {
  let { game } = useParams();
  const buyList = [125, 420, 720, 1375, 2400, 4000, 8150];

  const [activeList, setActiveList] = useState(false);

  function onListClick(event) {
    const currencyId = parseInt(event.target.id);
    const activeList = buyList.indexOf(currencyId);
    console.log(activeList);
    setActiveList(activeList);
  }

  return (
    <>
      <h1>
        Buy {games[game].name} {games[game].currency}
      </h1>
      <hr />
      <h3>Choose amount:</h3>
      <ListGroup className="currencyBuyList" horizontal>
        {buyList.map((value) => {
          return (
            <ListGroup.Item
              key={value}
              id={value}
              className="currencyBuyListItem"
              variant="primary"
              onClick={onListClick}
              active={buyList.indexOf(value) === activeList ? true : false}
            >
              {value + " " + games[game].currency}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
};

export default Purchase;
