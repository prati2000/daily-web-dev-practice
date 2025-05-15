import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enable, setEnable] = useState(false);
  const [values, setValues] = useState([]);

  const handleSingleSelection = (id) => {
    setSelected(id === selected ? null : id);
  };

  const handleMultiSelection = (id) => {
    console.log("Enabled");
    let cpyValue = [...values];
    let ind = cpyValue.indexOf(id);
    if (ind === -1) {
      cpyValue.push(id);
    } else {
      cpyValue.splice(ind, 1);
    }
    setValues(cpyValue);
  };

  console.log(values);
  return (
    <div className="wrapper">
      <button
        onClick={() => {
          setEnable(!enable);
        }}
      >
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                className="title"
                onClick={
                  enable
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              <div>
                {enable ? (
                  values.indexOf(dataItem.id) !== -1 ? (
                    <div className="content">{dataItem.answer}</div>
                  ) : null
                ) : selected === dataItem.id ? (
                  <div className="content">{dataItem.answer}</div>
                ) : null}
                {/* {selected === dataItem.id ? (
                  <div className="content">{dataItem.answer}</div>
                ) : null} */}
              </div>
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
