import "./App.css"
import products from "./products.json"

function App() {
  return (
    <div className="container">
      <div className="products-container">
        {products.map(function (pr) {
          return (
            <div className="product">
              <img src={pr.image} alt="" />
              <h2>{pr.title}</h2>
              <p>{pr.price} GEL</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
