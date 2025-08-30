const sampleListings = [
  {
    title: "Desert Home",
    description: "Unique home in arid landscape.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1800,
    location: "Phoenix",
    contry: "USA",
  },
  {
    title: "Historic Mansion",
    description: "Classic home with a story.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=1128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 15000,
    location: "Savannah",
    contry: "USA",
  },
  {
    title: "Garden Cottage",
    description: "Lush garden and cozy interior.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2200,
    location: "Bruges",
    contry: "Belgium",
  },
  {
    title: "Skyline View Apartment",
    description: "Amazing view of the city skyline.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4200,
    location: "Seoul",
    contry: "South Korea",
  },
  {
    title: "Suburban House",
    description: "Family-friendly neighborhood.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2900,
    location: "San Diego",
    contry: "USA",
  },
  {
    title: "Eco Home",
    description: "Environmentally sustainable design.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2700,
    location: "Copenhagen",
    contry: "Denmark",
  },
  {
    title: "Modern Duplex",
    description: "Two-story living space.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3100,
    location: "Sydney",
    contry: "Australia",
  },
  {
    title: "Minimalist Flat",
    description: "Clean lines and open space.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2000,
    location: "Barcelona",
    contry: "Spain",
  },
  {
    title: "Forest Lodge",
    description: "Deep in the woods, great for retreats.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3500,
    location: "Portland",
    contry: "USA",
  },
  {
    title: "Art Deco House",
    description: "Vintage feel with modern touch.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4000,
    location: "Miami",
    contry: "USA",
  },
  {
    title: "Island Bungalow",
    description: "Perfect for beach lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 6000,
    location: "Phuket",
    contry: "Thailand",
  },
  {
    title: "Industrial Loft",
    description: "Exposed brick and steel beams.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3100,
    location: "Chicago",
    contry: "USA",
  },
];
module.exports = { data: sampleListings };
