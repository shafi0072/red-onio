import React, { useState, useEffect } from "react";
import { useParams , Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartArrowDown,
  faPlus,
  faMinus
} from "@fortawesome/free-solid-svg-icons";
import "./ParticularItemDetails.css";




const ParticularItemDetails = (props) => {

  const { key } = useParams();

  //
  const [food, setFood] = useState([]);
    useEffect(() => {
        // const url = 'http://localhost:4200/food/' + key
        const url = 'https://red-onion-restaurant-bd.herokuapp.com/food/' + key
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log("data from mongodb", data);
                setFood(data)
            })
    }, [key])

  // const food = foods.find(fd => fd.key === key);

  const [quantity, setQuantity] = useState(1);

  const finalCartHandler = (food) => {
    food.quantity = quantity;
    props.cartHandler(food);
  }

  return (
    <div className="particularItemDetails">
      <div className="food-details my-5 container">
        <div className="row">
          <div className="col-md-6 pr-md-4">
            <h1>{food.name}</h1>
            <p className="my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates dolores quaerat cupiditate. Ratione maxime animi, illum
              dolorum vel quam iste quos alias cumque, doloremque placeat
              aspernatur expedita illo ut ducimus!
            </p>
            <div className="d-flex  my-4">
              <h2 className="price">${food.price}</h2>

              <div className="cart-controller ml-3 btn">
                <button
                  className="btn btn-default myBtn"
                  onClick={() => {
                    
                    if (quantity > 1) {
                      setQuantity(quantity - 1);

                    }
                  }}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>

                <span className="text">{quantity}</span>

                <button
                  className="btn btn-default myBtn"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
            <Link to="/"><button onClick={() => finalCartHandler(food)}  className="btn btn-danger rounded-pill mb-2">
              <FontAwesomeIcon icon={faCartArrowDown} /> Add
            </button></Link>
          </div>
          <div className="col-md-6">
            <img height="400px" src={food.imgLink} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticularItemDetails;
