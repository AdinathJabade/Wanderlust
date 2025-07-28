const sampleListings = [
  {
    title: "Modern Studio Apartment",
    description: "Cozy and affordable studio in the heart of the city.",
    image:
      "https://images.unsplash.com/photo-1752880051996-9b116757b970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 850,
    location: "Downtown",
    contry: "USA",
  },
  {
    title: "Beachfront Villa",
    description: "Luxury villa with ocean views.",
    image:
      "https://images.unsplash.com/photo-1752880051996-9b116757b970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 12000,
    location: "Malibu",
    contry: "USA",
  },
  {
    title: "Mountain Cabin",
    description: "Peaceful retreat in the mountains.",
    image:
      "https://images.unsplash.com/photo-1752880051996-9b116757b970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2500,
    location: "Aspen",
    contry: "USA",
  },
  {
    title: "City Loft",
    description: "Stylish loft with great lighting.",
    image:
      "https://images.unsplash.com/photo-1752880051996-9b116757b970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1900,
    location: "New York",
    contry: "USA",
  },
  {
    title: "Countryside Bungalow",
    description: "Quiet home surrounded by nature.",
    image:
      "https://images.unsplash.com/photo-1752880051996-9b116757b970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1300,
    location: "Yorkshire",
    contry: "UK",
  },
  {
    title: "Penthouse Suite",
    description: "Top floor penthouse with city views.",
    image:
      "https://images.unsplash.com/photo-1752880051996-9b116757b970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 9800,
    location: "Dubai",
    contry: "UAE",
  },
  {
    title: "Rustic Farmhouse",
    description: "Traditional farmhouse experience.",
    image:
      "https://images.unsplash.com/photo-1752880051996-9b116757b970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1600,
    location: "Provence",
    contry: "France",
  },
  {
    title: "Lake House",
    description: "Serene home by the lake.",
    image:
      "https://images.unsplash.com/photo-1752880051996-9b116757b970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 4000,
    location: "Ontario",
    contry: "Canada",
  },
  {
    title: "Urban Apartment",
    description: "Modern space for young professionals.",
    image:
      "https://images.unsplash.com/photo-1752880051996-9b116757b970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1800,
    location: "Berlin",
    contry: "Germany",
  },
  {
    title: "Colonial Home",
    description: "Charming colonial architecture.",
    image:
      "https://images.unsplash.com/photo-1752880051996-9b116757b970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 3200,
    location: "Boston",
    contry: "USA",
  },
  {
    title: "Studio Flat",
    description: "Affordable and functional.",
    image:
      "https://images.unsplash.com/photo-1752880051996-9b116757b970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 700,
    location: "Manchester",
    contry: "UK",
  },
  {
    title: "Luxury Condo",
    description: "High-end condo with amenities.",
    image:
      "https://images.unsplash.com/photo-1752880051996-9b116757b970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 6700,
    location: "Singapore",
    contry: "Singapore",
  },
  {
    title: "Ski Lodge",
    description: "Great for winter getaways.",
    image:
      "https://images.unsplash.com/photo-1752880051996-9b116757b970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 3000,
    location: "Whistler",
    contry: "Canada",
  },
  {
    title: "City Apartment",
    description: "Located near public transport.",
    image:
      "https://images.unsplash.com/photo-1752880051996-9b116757b970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1400,
    location: "Tokyo",
    contry: "Japan",
  },
  {
    title: "Tropical Retreat",
    description: "Relaxing spot surrounded by palm trees.",
    image:
      "https://images.unsplash.com/photo-1752880051996-9b116757b970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2800,
    location: "Bali",
    contry: "Indonesia",
  },
  {
    title: "Desert Home",
    description: "Unique home in arid landscape.",
    image:
      "https://images.unsplash.com/photo-1752880051996-9b116757b970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1800,
    location: "Phoenix",
    contry: "USA",
  },
  {
    title: "Historic Mansion",
    description: "Classic home with a story.",
    image:
      "https://images.unsplash.com/photo-1752880051996-9b116757b970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 15000,
    location: "Savannah",
    contry: "USA",
  },
  {
    title: "Garden Cottage",
    description: "Lush garden and cozy interior.",
    image:
      "https://images.unsplash.com/photo-1752880051996-9b116757b970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2200,
    location: "Bruges",
    contry: "Belgium",
  },
  {
    title: "Skyline View Apartment",
    description: "Amazing view of the city skyline.",
    image:
      "https://images.unsplash.com/photo-1752880051996-9b116757b970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 4200,
    location: "Seoul",
    contry: "South Korea",
  },
  {
    title: "Suburban House",
    description: "Family-friendly neighborhood.",
    image:
      "https://images.unsplash.com/photo-1752880051996-9b116757b970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2900,
    location: "San Diego",
    contry: "USA",
  },
  {
    title: "Eco Home",
    description: "Environmentally sustainable design.",
    image:
      "https://images.unsplash.com/photo-1752880051996-9b116757b970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2700,
    location: "Copenhagen",
    contry: "Denmark",
  },
  {
    title: "Modern Duplex",
    description: "Two-story living space.",
    image:
      "https://images.unsplash.com/photo-1752880051996-9b116757b970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 3100,
    location: "Sydney",
    contry: "Australia",
  },
  {
    title: "Minimalist Flat",
    description: "Clean lines and open space.",
    image:
      "https://images.unsplash.com/photo-1752880051996-9b116757b970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2000,
    location: "Barcelona",
    contry: "Spain",
  },
  {
    title: "Forest Lodge",
    description: "Deep in the woods, great for retreats.",
    image:
      "https://images.unsplash.com/photo-1752880051996-9b116757b970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 3500,
    location: "Portland",
    contry: "USA",
  },
  {
    title: "Art Deco House",
    description: "Vintage feel with modern touch.",
    image:
      "https://images.unsplash.com/photo-1752880051996-9b116757b970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 4000,
    location: "Miami",
    contry: "USA",
  },
  {
    title: "Island Bungalow",
    description: "Perfect for beach lovers.",
    image:
      "https://images.unsplash.com/photo-1752880051996-9b116757b970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 6000,
    location: "Phuket",
    contry: "Thailand",
  },
  {
    title: "Industrial Loft",
    description: "Exposed brick and steel beams.",
    image:
      "https://plus.unsplash.com/premium_photo-1675745329659-29044cb6adbb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 3100,
    location: "Chicago",
    contry: "USA",
  },
  {
    title: "Tiny Home",
    description: "Efficient use of space.",
    image:
      "https://images.unsplash.com/photo-1752880051996-9b116757b970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1200,
    location: "Portland",
    contry: "USA",
  },
  {
    title: "Seaside Cottage",
    description: "Charming cottage by the sea.",
    image:
      "https://images.unsplash.com/photo-1752880051996-9b116757b970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2700,
    location: "Cornwall",
    contry: "UK",
  },
  {
    title: "Hillside House",
    description: "Overlooks the city from above.",
    image:
      "https://images.unsplash.com/photo-1752880051996-9b116757b970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 3700,
    location: "Los Angeles",
    contry: "USA",
  },
];
module.exports = { data: sampleListings };
