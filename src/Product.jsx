{
  /* 

პირობა ? ჭეშმარიტის შემთხვევაში გამოიტანე : მცდარის შემთხვევაში გამოიტანე

პირობითად შეგვიძლია გამოვიტანოთ/მივანიჭოთ:
- კლასი
- ტექსტი
- ელემენტი
- ატრიბუტი
...
*/
}

export function Product({ isPopular, image, title, salePrice, price, stock }) {
  return (
    <div className={isPopular === true ? "popular product" : "product"}>
      <img src={image} alt={title} />
      <h2>{title}</h2>

      {/* ელემენტის კლასის პირობითი მინიჭება */}
      <p className={salePrice > 0 && "sale"}>{price} GEL</p>

      {/* ელემენტის პირობითი გამოტანა */}
      {salePrice !== null && <p>Sale price: {salePrice} GEL</p>}

      {/* ტექსტის პირობითი გამოტანა */}
      {stock === 0 && "Out of stock"}

      {isPopular === true && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-trending-up-icon lucide-trending-up"
        >
          <path d="M16 7h6v6" />
          <path d="m22 7-8.5 8.5-5-5L2 17" />
        </svg>
      )}
    </div>
  )
}
