import React , {useState} from "react";
import Filter from './Filter';
import ProductGrid from './ProductGrid';
import ProductList from './ProductList';
import Sorting from './Sorting';
import './Products.css';
import { useProductContext } from "../../Context/ProductContex";


const Products = () => {
  const {filterProducts, isLoading} = useProductContext();
  const [isGrid, setIsGrid] = useState(true);
  return <section className="products-section">
    <div className='products-grid'>
      <div className="filter-div">
        <Filter/>
      </div>
      <div className="products-div">
        <div>
            <Sorting setIsGrid={setIsGrid} isGrid={isGrid}/>
        </div>
        <div>
          {
            isGrid?<ProductGrid filterProducts={filterProducts} isLoading={isLoading} /> : <ProductList filterProducts={filterProducts} isLoading={isLoading}/>
          }
            
        </div>
      </div>
    </div>
  </section>;
};

export default Products;
