import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Produs.css";

function Produs(props) {
  const onButtonPress = function (event) {
    props.onAddToCart(props.produs);
  };

  return (
    <div className="produsarea">
      <div className="produscard">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.produs.img} />
          <Card.Body className="bodyprodus">
            <Card.Title>{props.produs.denumire}</Card.Title>
            <Card.Text>{props.produs.pret}</Card.Text>
            <Button variant="secondary" onClick={onButtonPress}>
              Adauga in cos!
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Produs;
