const MenuPage = () => {
  const sections = [
    {
      title: "Burger Bonanza",
      items: [
        { id: 1, name: "Classic Cheeseburger", description: "A timeless favorite", price: "₹450", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEQUOgsu--h7z4BeIB1SLxxIIlbO1acFof9w&s" },
        { id: 2, name: "Signature Burger", description: "A unique creation that sets your brand apart", price: "₹550", image: "/images/signatureburger.jpg" },
        { id: 3, name: "Mini Cheeseburger", description: "Perfect for snacking or sampling multiple flavors", price: "₹350", image: "/images/miniburger.jpg" },
      ],
      containerClass: "menu-container",
      titleClass: "menu-title",
      gridClass: "menu-grid",
      cardClass: "menu-card",
    },
    {
      title: "Chicken Choices",
      items: [
        { id: 1, name: "Chicken Nuggets", description: "Tender chicken nuggets with a crispy coating", price: "₹500", image: "/images/air-fryer-chicken-nuggets-8.jpg" },
        { id: 2, name: "Chicken Wrap", description: "A lighter option that's easy to eat on-the-go", price: "₹300", image: "/images/Cajun-Chicken-Wrap.jpg" },
        { id: 3, name: "Grilled Chicken", description: "Crispy and juicy chicken tenders with your choice of sauce", price: "₹400", image: "/images/grilled.jpg" },
      ],
      containerClass: "menu1-container",
      titleClass: "menu1-title",
      gridClass: "menu1-grid",
      cardClass: "menu1-card",
    },
    {
      title: "Fries and Sides",
      items: [
        { id: 1, name: "Classic French Fries", description: "A must-have item", price: "₹300", image: "/images/frenchfries.jpg" },
        { id: 2, name: "Mozzarella Sticks", description: "Perfect for snacking or sampling multiple flavors", price: "₹250", image: "/images/mozasticks.jpg" },
        { id: 3, name: "Side Salads", description: "For those seeking a healthier option", price: "₹300", image: "/images/salad.jpg" },
      ],
      containerClass: "menu2-container",
      titleClass: "menu2-title",
      gridClass: "menu2-grid",
      cardClass: "menu2-card",
    },
    {
      title: "Beverages",
      items: [
        { id: 1, name: "Ice Cream", description: "Classic cones or cups", price: "₹200", image: "/images/icecream.jpg" },
        { id: 2, name: "Milkshakes", description: "Traditional flavors", price: "₹150", image: "/images/milkshake.jpg" },
        { id: 3, name: "Cakes", description: "Freshly baked options", price: "₹250", image: "/images/cakes.jpg" },
      ],
      containerClass: "menu3-container",
      titleClass: "menu3-title",
      gridClass: "menu3-grid",
      cardClass: "menu3-card",
    },
  ];

  return (
    <div>
      {sections.map((section, index) => (
        <div key={index} className={section.containerClass}>
          <h1 className={section.titleClass}>{section.title}</h1>
          <div className={section.gridClass}>
            {section.items.map((item) => (
              <div key={item.id} className={section.cardClass}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="menu-image"
                  onError={(e) => {
                    e.target.src = "/images/placeholder.jpg"; // Replace broken images
                  }}
                />
                <div className="menu-content">
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <p className="menu-price">{item.price}</p>
                  <button className="add-to-cart-button">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuPage;
