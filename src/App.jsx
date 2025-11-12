import "./App.css"
import products from "./products.json"
import { Product } from "./Product"

function App() {
  function changeProductCategory(event) {
    console.log("Changing category", event.target.value)
  }

  const productElements = products.map(function (pr) {
    return (
      <Product
        stock={pr.stock}
        salePrice={pr.salePrice}
        title={pr.title}
        image={pr.image}
        price={pr.price}
        isPopular={pr.popular}
        description={pr.description}
      />
    )
  })

  return (
    <div className="container">
      <select onChange={changeProductCategory} style={{ marginTop: "16px", font: "inherit" }}>
        <option value="music">Music</option>
        <option value="gaming">Gaming</option>
        <option value="audio">Audio</option>
      </select>
      <div className="products-container">{productElements}</div>
    </div>
  )
}

export default App
