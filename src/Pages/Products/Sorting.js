import React ,{useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import "./Sorting.css";
import { RiLayoutGridFill } from "react-icons/ri";
import { IoList } from "react-icons/io5";
import { useProductContext } from "../../Context/ProductContex";

const Sorting = ({ setIsGrid }) => {

  const {  getFilterProduct, sortingValue , sorting} = useProductContext();


  useEffect(
    () => {
        getFilterProduct(`https://dummyjson.com/products/`);
    },
    [sortingValue]
  );

  return (
    <section className="sorting-section">
      <div className="grid-list-icon">
        <RiLayoutGridFill
          className="grid-icon"
          onClick={() => {
            setIsGrid(true);
          }}
        />
        <IoList className= "grid-icon"
          onClick={() => {
            setIsGrid(false);
          }}
        />
      </div>
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select name='sort' id="sort" className="sort-selection" onChange={sorting}>
            <option value='lowest'>Price(lowest)</option>
            <option value="#" disabled></option>
            <option value='highest'>Price(highest)</option>
            <option value="#" disabled></option>
            <option value='a-z'>Alphabetically(a-z)</option>
            <option value="#" disabled></option>
            <option value='z-a'>Alphabetically(z-a)</option>
          </select>
        </form>
       
      </div>
    </section>
  );
};

export default Sorting;
