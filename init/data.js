const sampleListings = [
  {
    title: "Modern Apartment in Mumbai",
    description:
      "A stylish apartment with sea views and easy access to the heart of the city.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    },
    price: 2500,
    location: "Mumbai",
    contry: "India",
  },
  {
    title: "Luxury Villa in Goa",
    description:
      "Beachside villa with private pool, perfect for family vacations and weekend getaways.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    price: 4800,
    location: "Goa",
    contry: "India",
  },
  {
    title: "Heritage Haveli in Jaipur",
    description:
      "Traditional Rajasthani haveli with intricate architecture and royal interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
    },
    price: 5200,
    location: "Jaipur",
    contry: "India",
  },
  {
    title: "Cozy Cottage in Manali",
    description:
      "A wooden cottage surrounded by snow-capped peaks and pine forests.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    },
    price: 1800,
    location: "Manali",
    contry: "India",
  },
  {
    title: "Luxury Penthouse in Delhi",
    description:
      "High-rise penthouse with panoramic views of the capital city skyline.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    price: 8900,
    location: "Delhi",
    contry: "India",
  },
  {
    title: "Riverside Villa in Rishikesh",
    description:
      "Peaceful villa on the banks of the Ganga, ideal for yoga and meditation retreats.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    price: 4000,
    location: "Rishikesh",
    contry: "India",
  },
  {
    title: "Hilltop House in Ooty",
    description:
      "Charming hilltop home with tea garden views and cool mountain breeze.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1599423300746-b62533397364",
    },
    price: 2600,
    location: "Ooty",
    contry: "India",
  },
  {
    title: "Urban Flat in Bangalore",
    description:
      "Modern flat in the tech hub with great connectivity and co-working spaces nearby.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    },
    price: 3100,
    location: "Bangalore",
    contry: "India",
  },
  {
    title: "Luxury Bungalow in Pune",
    description:
      "Spacious bungalow in Koregaon Park with private garden and open terrace.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502005097973-6a7082348e28",
    },
    price: 6000,
    location: "Pune",
    contry: "India",
  },
  {
    title: "Seaside Apartment in Chennai",
    description: "Modern apartment overlooking the Marina Beach coastline.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    },
    price: 2800,
    location: "Chennai",
    contry: "India",
  },
  {
    title: "Mountain Retreat in Darjeeling",
    description:
      "Cozy home surrounded by tea estates and misty Himalayan views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    },
    price: 2200,
    location: "Darjeeling",
    contry: "India",
  },
  {
    title: "Farmhouse in Nashik",
    description:
      "Countryside farmhouse with vineyard surroundings, perfect for wine lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    },
    price: 3700,
    location: "Nashik",
    contry: "India",
  },
  {
    title: "Lakeside Villa in Udaipur",
    description:
      "Royal-inspired villa with a serene lakeside view and grand interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
    },
    price: 7000,
    location: "Udaipur",
    contry: "India",
  },
  {
    title: "Clifftop Villa in Vizag",
    description:
      "Ocean-facing villa on the cliffs with stunning sunrise views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    },
    price: 4500,
    location: "Visakhapatnam",
    contry: "India",
  },
  {
    title: "Eco Home in Auroville",
    description:
      "Sustainable home built with natural materials, blending modern design with greenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    price: 3000,
    location: "Auroville",
    contry: "India",
  },
  {
    title: "Studio Flat in Hyderabad",
    description:
      "Compact yet elegant studio in the IT hub, ideal for young professionals.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1599423300746-b62533397364",
    },
    price: 2100,
    location: "Hyderabad",
    contry: "India",
  },
  {
    title: "Palatial Mansion in Lucknow",
    description:
      "Sprawling mansion inspired by Nawabi architecture with lush gardens.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    },
    price: 9500,
    location: "Lucknow",
    contry: "India",
  },
  {
    title: "Beachside Bungalow in Puri",
    description: "Relaxing bungalow just steps away from golden sandy beaches.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    },
    price: 3800,
    location: "Puri",
    contry: "India",
  },
  {
    title: "City Loft in Ahmedabad",
    description:
      "Industrial-style loft in the city center, close to cultural landmarks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    price: 2700,
    location: "Ahmedabad",
    contry: "India",
  },

  {
    title: "Suburban House in Texas",
    description:
      "Spacious suburban home with a backyard garden and two-car garage.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
    },
    price: 3200,
    location: "Houston",
    contry: "USA",
  },
  {
    title: "Penthouse in New York",
    description: "Luxury penthouse with skyline views and modern interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    price: 12000,
    location: "New York",
    contry: "USA",
  },
  {
    title: "Countryside Cabin in Colorado",
    description:
      "Rustic wooden cabin surrounded by pine forests and hiking trails.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    },
    price: 2500,
    location: "Denver",
    contry: "USA",
  },
  {
    title: "Modern Condo in San Francisco",
    description:
      "Smartly designed condo in the heart of the Bay Area with tech-inspired interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    },
    price: 4500,
    location: "San Francisco",
    contry: "USA",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Classic brownstone house with vintage charm and modern amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
    },
    price: 5100,
    location: "Boston",
    contry: "USA",
  },
  {
    title: "Beach Villa in Miami",
    description: "Luxury villa by the beach with private pool and palm trees.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502005097973-6a7082348e28",
    },
    price: 7000,
    location: "Miami",
    contry: "USA",
  },
  {
    title: "Family Home in Seattle",
    description:
      "Comfortable suburban family home with a cozy fireplace and garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
    },
    price: 3600,
    location: "Seattle",
    contry: "USA",
  },
  {
    title: "Luxury Mansion in Los Angeles",
    description: "Hollywood-style mansion with infinity pool and city views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    },
    price: 15000,
    location: "Los Angeles",
    contry: "USA",
  },
  {
    title: "Ranch House in Texas",
    description: "Traditional ranch-style house surrounded by open fields.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
    },
    price: 2900,
    location: "Dallas",
    contry: "USA",
  },
  {
    title: "Loft Apartment in Chicago",
    description:
      "Industrial loft with exposed brick walls and modern furnishings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    },
    price: 4200,
    location: "Chicago",
    contry: "USA",
  },
  {
    title: "Lake House in Michigan",
    description:
      "Relaxing home on the lake with private dock and stunning sunset views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1599423300746-b62533397364",
    },
    price: 3900,
    location: "Michigan",
    contry: "USA",
  },
  {
    title: "Townhouse in Washington DC",
    description:
      "Elegant townhouse in the capital with easy access to monuments and museums.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    price: 4700,
    location: "Washington DC",
    contry: "USA",
  },
  {
    title: "Desert Villa in Arizona",
    description:
      "Unique desert home with modern architecture and mountain views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    },
    price: 3400,
    location: "Phoenix",
    contry: "USA",
  },
  {
    title: "Apartment in San Diego",
    description: "Modern apartment with ocean views and a rooftop lounge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    },
    price: 3700,
    location: "San Diego",
    contry: "USA",
  },
  {
    title: "Luxury Cabin in Montana",
    description:
      "Private cabin in the mountains with a hot tub and rustic design.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    price: 4300,
    location: "Bozeman",
    contry: "USA",
  },
  {
    title: "Victorian House in Portland",
    description:
      "Charming Victorian-style home with antique finishes and garden space.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
    },
    price: 4000,
    location: "Portland",
    contry: "USA",
  },
  {
    title: "Cottage in Vermont",
    description:
      "Warm countryside cottage surrounded by maple trees, ideal for autumn stays.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    },
    price: 2800,
    location: "Burlington",
    contry: "USA",
  },
];
module.exports = { data: sampleListings };
