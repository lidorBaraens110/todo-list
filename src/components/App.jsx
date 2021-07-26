import React, { useState } from "react";
import ToDoItem from './toDoItem';
import SetInput from './setInput';

function App() {
  const [list, setList] = useState([]);
  function handlingClick(mission) {
    setList(prevValue => {
      return [...prevValue, { mission }];
    });

  }
  const deleteItem = (id) => {
    setList(prevValue => {
      return prevValue.filter((item, index) => {
        return index !== id
      });
    })
  }

  const onChecked = (id) => {
    console.log(id)
    const newList = list.map((item, i) => {
      console.log('i', i, 'item', item)
      // return item
      if (id === i) {

        return { ...item, done: true }
      } return item
    })
    setList([...newList])
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <SetInput onClick={handlingClick} />
      </div>
      <div>
        <ul>
          {
            list.map((item, index) => {
              return <ToDoItem item={item.mission} done={item.done} key={index} id={index} onChecked={onChecked} delete={deleteItem} />;
            })}
        </ul>
      </div>
    </div>
  );
}

export default App;
