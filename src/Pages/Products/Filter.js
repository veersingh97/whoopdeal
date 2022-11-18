import React from "react";
import { useProductContext } from "../../Context/ProductContex";
import "./Filters.css";

const Filter = () => {
 
  const {
    filters: { text, price },
    updateFilterValue,
    products,
    clearFilters,
  } = useProductContext();

  const getUniqueData = (data, property) => {
    let newValue = data.map((curElem) => {
      return curElem[property];
    });
    return (newValue = ["all", ...new Set(newValue)]);
  };

  const categoryData = getUniqueData(products, "category");

  return (
    <section className="filter-section  ">
      <div className="search-bar">
        <form>
          <input
            type="text"
            name="text"
            value={text}
            placeholder="search..."
            onChange={updateFilterValue}
          />
        </form>
      </div>
      <div className="mobile-grid">
        <div className="category-div ">
          <h3>Categories</h3>
          <div className="category-filters">
            {categoryData.map((curElem, index) => {
              return (
                <button
                  type="button"
                  className={" cat-filter "}
                  name="category"
                  value={curElem}
                  key={index}
                  onClick={updateFilterValue}
                >
                  {curElem}
                </button>
              );
            })}
          </div>
        </div>
        <div className="star-rating-filter ">
          <h3>Star Ratings</h3>

          <button
            type="button"
            className="cat-filter color-change"
            name="rating"
            value={4.5}
            onClick={updateFilterValue}
          >
            Top Rated Products
          </button>
          <button
            type="button"
            className="cat-filter color-change"
            name="rating"
            value={4}
            onClick={updateFilterValue}
          >
            Atleast 4 Stars
          </button>
        </div>
      </div>
      <div className="range-filter">
        <h3>Price</h3>
        <input
          type="range"
          name="price"
          max="1800"
          min="0"
          value={price}
          step="5"
          onChange={updateFilterValue}
        ></input>
      </div>
      <div className=" clear-filters">
        <button className="btn color" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
    </section>
  );
};

export default Filter;
