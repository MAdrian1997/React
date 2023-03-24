import "./Produse.css";
import Filterbuton from "../Filterbuton/Filterbuton";
import React, { useState } from "react";
import listaDeProduse from "../ListaProduse";
import Produs from "../Produs/Produs";

function Produse(props) {
  const [category, setCategory] = useState("default");

  function filterbyType(type) {
    let types = ["Laptop", "TV", "Phone"];
    let found = false;
    for (let j = 0; j < types.length; j++) {
      if (types[j] === type) {
        found = true;
      }
    }
    if (found === false) {
      return listaDeProduse;
    }
    let rezultat = [];
    for (let i = 0; i < listaDeProduse.length; i++) {
      if (listaDeProduse[i].type === type) {
        rezultat.push(listaDeProduse[i]);
      }
    }
    return rezultat;
  }

  function getTypeFiltredProduct(type) {
    let types = ["Laptop", "TV", "Phone"];

    let found = false;
    for (let j = 0; j < types.length; j++) {
      if (types[j] === type) {
        found = true;
      }
    }

    if (found === false) {
      return types;
    }

    return [type];
  }
  function onFilterSelect(res) {
    setCategory(res);
  }

  return (
    <div>
      <Filterbuton onFilterSelect={onFilterSelect} />
      <div>
        {getTypeFiltredProduct(category).map((type) => (
          <React.Fragment key={type}>
            <h1 className="produs">{type}</h1>
            <div className="listaproduse">
              {filterbyType(type).map((produs) => (
                <Produs
                  produs={produs}
                  key={produs.key}
                  onAddToCart={props.onAddToCart}
                />
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Produse;
