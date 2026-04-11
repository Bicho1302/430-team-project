export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  sellerId: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Handcrafted Clay Vase",
    price: 35,
    image: "https://images.unsplash.com/photo-1642582615780-35343a19fd65?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Ceramics",
    description:
      "A handmade clay vase designed to bring warmth and character to any room.",
    sellerId: 1,
  },
  {
    id: 2,
    name: "Woven Storage Basket",
    price: 28,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    category: "Home Decor",
    description:
      "A sturdy woven basket perfect for organizing blankets, toys, or household items.",
      sellerId: 2,
  },
  {
    id: 3,
    name: "Wooden Serving Board",
    price: 42,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    category: "Kitchen",
    description:
      "A smooth handcrafted wooden serving board ideal for charcuterie and display.",
      sellerId: 3,
  },
  {
    id: 4,
    name: "Handmade Knit Scarf",
    price: 24,
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=800&q=80",
    category: "Fashion",
    description:
      "A soft knit scarf made with care, perfect for staying warm in style.",
      sellerId: 4,
  }
];