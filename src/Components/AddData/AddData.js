import React from "react";
import foods from "../../Data/food.json";

const AddData = () => {
  const handleAddInventory = () => {
    console.log(foods.length);

    fetch('http://localhost:4200/addFood', {
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(foods)
    })
    .then(res => res.json())
    .then(data =>{
        console.log("Post Successful", data);
    })
  };

  const style = {
      marginTop:'100px'
  }

  return (
    <div className="container">
      <div className="row justify-content-center" style={style}>
        <div className="col-md-12 text-center">
          <h1>Add Data to Database</h1>
          <button onClick={handleAddInventory} disabled>Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddData;
