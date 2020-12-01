import React, { useState } from "react";
import { Toggler, TogglerItem } from "./toggler";
import List from "./List";

const Helper = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [layout, setLayout] = useState([]);
  const [list, setList] = useState([]);

  const changeToggler = (value) => (e) => {
    setLayout(value);
  };
  //Func for reset values and set state to default condition?
  const onSubmit = (e) => {
    e.preventDefault();
    let elements = e.target.elements;
    setLayout(layout);
    let formItem = "";
    let formData = [];
    for (let key in elements) {
      if (elements[key].value !== "") {
        formItem += elements[key].value;
      }
    }
    // console.log(formItem);
    // console.log(elements);
    formData.push(formItem);

    setName("");
    setEmail("");
    setCity("");
    setLayout([]);
    setList(formData);
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="App">
      <h1>FORM</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Name"
          name={name}
        />
        <br />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          placeholder="Email"
          name={email}
        />
        <label htmlFor="">
          <span>Select Data</span>
          <select onChange={handleChange} defaultValue={city}>
            <option>Kyiv</option>
            <option>Lviv</option>
            <option>Harkiv</option>
            <option>Odessa</option>
          </select>
        </label>

        <br />

        <Toggler active={layout} action={changeToggler}>
          <TogglerItem value="left" name="left" />
          <TogglerItem value="right" name="right" />
        </Toggler>

        <button>Send</button>
        <List list={list}></List>
      </form>
    </div>
  );
};
export default Helper;
