export function Product(props) {
  return (
    <div className="product">
      <img
        src={props.image}
        alt={props.title}
      />
      <h2>{props.title}</h2>
      <p>{props.price} GEL</p>
      <p>Sale price: {props.salePrice} GEL</p>
      
      {/* პირობა ? ჭეშმარიტია : მცდარია */}
      {props.stock === 0 ? "Out of stock" : "Available"}
    </div>
  )
}
