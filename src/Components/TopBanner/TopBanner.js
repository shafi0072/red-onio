import React from 'react';
import "./TopBanner.css";

const TopBanner = () => {
    return (
        <section className="banner d-flex text-center align-items-center">
        <div className="container">
          <h1>Best food waiting for your belly</h1>
          <div className="search-box col-md-6 my-5 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Search food items"
          />
          <button className="btn btn-danger search-btn btn-rounded">Search</button>


          </div>
          
          
        </div>
      </section>
    );
};

export default TopBanner;