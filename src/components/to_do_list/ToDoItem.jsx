import React, {useState} from "react";
import "./ToDoItem.scss";

export default function ToDoItem(props){

  const handleClick = (e) => {
    const keyValue = e.currentTarget.getAttribute("keyValue");
    props.SetList((prevState) => {
      const tempList = [...prevState];
      tempList.forEach((item) => {
        if (item.key === keyValue) {
          item.finished ? item.finished = false : item.finished = true;
        }
      })
      return tempList;
    })
  }

  let classes = `ToDoItem${props.item.finished ? " Finished" : ""}`;

  //Tror ikke man skal trenge å bruke keyValue og key. Men jeg fant det ikke enda
  return <div className={classes} key={props.item.key} keyValue={props.item.key} onClick={handleClick}><h2>{props.item.content}</h2></div>
}