import "./App.css"
import products from "./products.json"
import { Product } from "./Product"

/*
<div className="product">
  <img src={pr.image} alt="" />
  <h2>{pr.title}</h2>
  <p>{pr.price} GEL</p>
</div>
*/

function App() {
  return (
    <div className="container">
      <div className="products-container">
        {products.map(function (pr) {
          return (
            <Product
              stock={pr.stock}
              salePrice={pr.salePrice}
              title={pr.title}
              image={pr.image}
              price={pr.price}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
