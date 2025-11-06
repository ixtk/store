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

// მოიძიე && ოპერატორი და ჩაანაცვლე ? სინტაქსი ზოგიერთ ადგილას

export function Product(props) {
  return (
    <div className={props.isPopular === true ? "popular" : "product"}>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>

      {/* ელემენტის კლასის პირობითი მინიჭება */}
      <p className={props.salePrice > 0 ? "sale" : ""}>{props.price} GEL</p>

      {/* ელემენტის პირობითი გამოტანა */}
      {props.salePrice === null ? "" : <p>Sale price: {props.salePrice} GEL</p>}

      {/* ტექსტის პირობითი გამოტანა */}
      {props.stock === 0 ? "Out of stock" : "Available"}

      {props.isPopular === true ? (
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
      ) : (
        ""
      )}
    </div>
  )
}
