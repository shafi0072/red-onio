import React from 'react';
import { Link } from 'react-router-dom';

const FoodItem = (props) => {

    

    const {name, price, imgLink,key} = props.food;


    return (
        <div className="col-md-4 mb-4">
            <Link to={"/food/"+key}>
            <div className="card text-center">
                <img src={imgLink} alt="" className="card-img-top"/>
                <div className="card-body">
                    <h4>{name}</h4>
                    
                    <p>How to Dream About Future</p>
                    <h5>$ <span>{price}</span> </h5>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default FoodItem;