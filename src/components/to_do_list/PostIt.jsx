import React from "react";
import { useState } from "react";

export default function PostIt(props) {
  const [listItem, setListItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.SetList((prevState) => [listItem, ...prevState]);
    setListItem("");
  };

  const handleInputChange = (e) => {
    setListItem(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for="list__item">To do</label>
      <input
        value={listItem}
        onChange={handleInputChange}
        id="list__item"
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
}
