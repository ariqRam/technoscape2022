import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";

import Axios from "axios";

const SearchList = (props) => {
  const games = props.games;

  const options = () => {
    const gameOptions = [];
    Object.keys(games).forEach((game, index) => {
      gameOptions.push({ value: game, label: games[game].name });
    });
    return gameOptions;
  };

  let navigate = useNavigate();

  function handleChange(selectedOption) {
    const game = selectedOption.value;
    Axios.get("http://localhost:3001/buy", { params: { game: game } }).then(
      (res) => {
        console.log(res.data);
      }
    );
    const path = "buy/" + game;
    navigate(path);
  }

  function handleClick(event) {
    const game = event.target.id;
    console.log(game);
    Axios.get("http://localhost:3001/buy", { params: { game: game } }).then(
      (res) => {
        console.log(res.data);
      }
    );
    const path = "buy/" + game;
    navigate(path);
  }

  return (
    <>
      <Select options={options()} onChange={handleChange} />
      <Row>
        {Object.keys(games).map((game) => {
          return (
            <Col className="gameList mx-auto" key={game}>
              <Card style={{ width: "15rem", height: "25rem" }}>
                <Card.Img
                  variant="top"
                  src={require("../static/" + games[game].logo)}
                />
                <Card.Body>
                  <Card.Title>{games[game].name}</Card.Title>
                  <Card.Text>{games[game].currency}</Card.Text>
                  <Button variant="primary" id={game} onClick={handleClick}>
                    Buy {games[game].currency}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default SearchList;
