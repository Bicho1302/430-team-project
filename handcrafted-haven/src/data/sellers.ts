export type Seller = {
  id: number;
  name: string;
  bio: string;
  image: string;
  location: string;
  specialty: string;
};

export const sellers: Seller[] = [
  {
    id: 1,
    name: "Emma Carter",
    bio: "Emma is a handcrafted ceramic artist who creates warm, functional pieces inspired by nature and everyday living.",
    image: "https://plus.unsplash.com/premium_photo-1770382814551-cdf938c63374?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Portland, Oregon",
    specialty: "Ceramics",
    
  },
  {
    id: 2,
    name: "Noah Martinez",
    bio: "Noah specializes in handmade woodwork, building timeless home décor pieces with attention to detail and sustainability.",
    image: "https://plus.unsplash.com/premium_photo-1722945768983-cddc96cbad8a?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Boise, Idaho",
    specialty: "Woodwork",
  },
 
  {
   id: 4,
    name: "Sophia Lee",
    bio: "Sophia creates artisan textiles and decorative pieces that blend comfort, culture, and contemporary design.",
    image: "https://plus.unsplash.com/premium_photo-1661762483887-ee82989ac039?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Salt Lake City, Utah",
    specialty: "Textiles",
},
 

{
  id: 3,
  name: "Lucas Rivera",
  bio: "Lucas creates handcrafted decorative pieces with a modern artistic touch.",
  image: "https://plus.unsplash.com/premium_photo-1677151140644-62485cf82e57?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  location: "Austin, Texas",
  specialty: "Art & Decor",
},
];


