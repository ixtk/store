import "./App.css"
import products from "./products.json"
import { Product } from "./Product"
import { useState } from "react"

function App() {
  const [filterCategory, setFilterCategory] = useState("audio")

  function changeProductCategory(event) {
    console.log("Changing category", event.target.value)
    
    setFilterCategory(event.target.value)
  }

  const filteredProducts = products.filter(function (pr) {
    if (pr.category === filterCategory) {
      return true
    } else {
      return false
    }
  })

  const productElements = filteredProducts.map(function (pr) {
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
      <select value={filterCategory} onChange={changeProductCategory} style={{ marginTop: "16px", font: "inherit" }}>
        <option value="mobile">Mobile</option>
        <option value="gaming">Gaming</option>
        <option value="audio">Audio</option>
      </select>
      <div className="products-container">{productElements}</div>
    </div>
  )
}

export default App
