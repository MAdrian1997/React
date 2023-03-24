import Navbar from "../Navbar/Navbar";
import "./Cart.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function Cart(props) {
  const pretProdus = function (pret, quantity) {
    let pretProdus = pret.split(" ");
    let pretNumber = Number(pretProdus[0]);
    let pretFinal = Number(pretNumber * quantity) + " " + pretProdus[1];
    return pretFinal;
  };

  const GetTotalQuantity = function (quantity) {
    let quantityTotal = 0;
    for (let i = 0; i < quantity.length; i++) {
      quantityTotal += quantity[i];
    }
    return quantityTotal;
  };
  const GetTotalPrice = function (produse, quantity) {
    let total = 0;
    for (let i = 0; i < produse.length; i++) {
      let pretFinal = pretProdus(produse[i].pret, quantity[i]);
      total += Number(pretFinal.split(" ")[0]);
    }
    total = total + " lei";
    return total;
  };
  return (
    <div>
      <Navbar />
      <div className="cart">
        <h1>Cart</h1>
      </div>
      <div className="containercart">
        <Table striped>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {props.produseInCart.map((produs, i) => (
              <tr key={produs.key}>
                <td>{produs.denumire}</td>
                <td>{props.quantity[i]}</td>
                <td>{pretProdus(produs.pret, props.quantity[i])}</td>
                <td>
                  <Button
                    variant="danger"
                    value={produs.key}
                    onClick={props.removeProduct}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>{GetTotalQuantity(props.quantity)}</td>
              <td>{GetTotalPrice(props.produseInCart, props.quantity)}</td>
              <td></td>
            </tr>
          </tfoot>
        </Table>
        <Button variant="secondary" className="btncart">
          Buy it!
        </Button>
      </div>
    </div>
  );
}

export default Cart;
