import React from "react";
import { useState } from "react";

function assignKey(list){
  let tempMax = 0;
  for(let i = 0; i < list.length; i++){
    const tempKey = Number(list[i].key);
    if(tempKey === NaN) continue;
    if(tempKey > tempMax) {
      tempMax = tempKey; 
    }
  }
  return (tempMax + 1).toString().padStart(8, "0");
}

export default function PostIt(props) {
  const [listItem, setListItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.SetList((prevState) => [{content: listItem, key: assignKey(props.ListItemArray), finished: false}, ...prevState]);
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
