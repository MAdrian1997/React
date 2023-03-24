import Form from "react-bootstrap/Form";
import "./Filterbuton.css";
function SelectBasicExample(props) {
  const handleOnchange = function (event) {
    props.onFilterSelect(event.target.value);
  };
  return (
    <Form.Select
      aria-label="Default select example"
      className="formselect"
      onChange={handleOnchange}
    >
      <option value="default" className="allproduct">
        All Products
      </option>
      <option value="Phone" className="allproduct">
        Phone
      </option>
      <option value="Laptop" className="allproduct">
        Laptop
      </option>
      <option value="TV" className="allproduct">
        TV
      </option>
    </Form.Select>
  );
}

export default SelectBasicExample;
