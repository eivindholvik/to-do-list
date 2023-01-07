import React, {useState} from "react";
import "./ToDoItem.scss";

export default function ToDoItem(props){

  const handleClick = (e) => {
    const keyvalue = e.currentTarget.getAttribute("keyvalue");
    props.SetList((prevState) => {
      const tempList = [...prevState];
      tempList.forEach((item) => {
        if (item.key === keyvalue) {
          item.finished ? item.finished = false : item.finished = true;
        }
      })
      return tempList;
    })
  }

  let classes = `ToDoItem${props.item.finished ? " Finished" : ""}`;

  //Tror ikke man skal trenge å bruke keyvalue og key. Men jeg fant det ikke enda
  return <div className={classes} keyvalue={props.item.key} onClick={handleClick}><h2>{props.item.content}</h2></div>
}