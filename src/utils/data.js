

// tour detail img
import image1 from "../assets/images/new/1.jpg";
import image2 from "../assets/images/new/2.jpg";
import image3 from "../assets/images/new/3.jpg";
import image4 from "../assets/images/new/4.jpg";
import image5 from "../assets/images/new/5.jpg";
import image6 from "../assets/images/new/6.jpg";
import image7 from "../assets/images/new/7.jpg";
import image8 from "../assets/images/new/8.jpg";

export const destinationsData = [
  {
    id: 0,
    name: "Alzer Hotel",
    tours: "5 tours and activities",
    image: "https://lh3.googleusercontent.com/p/AF1QipMZq1CysZEed8OTUs4VIlxToKzZPAGWM07QL3kG=s680-w680-h510",
    link: "tour-name",
    shortDes: "",
  },
  {
    id: 1,
    name: "1207 Hotel",
    tours: "9 tours and activities",
    image: "https://lh5.googleusercontent.com/p/AF1QipPjD_rb9FiTv2ycJATqzTzcIi8SNYK4E233Y4RR=w540-h289-p-k-no",
    link: "tour-name",
  },
];

export const popularsData = [
  {
    id: 0,
    title: "Superior Twin",
    images: [
      "https://hotel1207.com/storage/rooms/superiortwin/61920684d408f-770x460.jpeg",
      "https://hotel1207.com/storage/rooms/superriordouble/61920682c79a1-770x460.jpeg",
      "https://hotel1207.com/storage/rooms/superiortwin/61920684d408f-770x460.jpeg"
    ],
    location: "Antalya Kaleiçi",
    description: "Ferah ve konforlu Superior Twin odamız, şehir manzarası eşliğinde rahat bir konaklama sunuyor.",
    amenities: ['wifi', 'tv', 'air-conditioner', 'coffee'],
    category: ["Lüx"],
    days: "5 days - 4 nights",
    price: 100,
    afterDiscount: 92,
    rating: 2,
    reviews: "Oda",
    size: 25,
    minPerson: 2,
    view: "Şehir Manzaralı"
  },
  {
    id: 1,
    title: "Superior Double",
    images: [
      "https://hotel1207.com/storage/rooms/superriordouble/61920682c79a1-770x460.jpeg",
      "https://hotel1207.com/storage/rooms/superriordouble/61920682c79a1-770x460.jpeg",
      "https://hotel1207.com/storage/rooms/superriordouble/61920682c79a1-770x460.jpeg"
    ],
    location: "Antalya Kaleiçi",
    description: "Romantik bir kaçamak için ideal olan Superior Double odamız, lüks ve konforu bir arada sunuyor.",
    amenities: [
      { icon: "wifi", name: "Ücretsiz Wi-Fi" },
      { icon: "tv", name: "Düz Ekran TV" },
      { icon: "person", name: "2 Kişilik" },
      { icon: "air-conditioner", name: "Klima" },
      { icon: "bathtub", name: "Küvetli Banyo" },
      { icon: "minibar", name: "Minibar" }
    ],
    category: ["Lüx"],
    days: "2 days - 1 nights",
    price: 87,
    afterDiscount: 82,
    rating: 1,
    reviews: "Oda",
    size: 30,
    minPerson: 2,
    view: "Deniz Manzaralı"
  },
  {
    id: 2,
    title: "Deluxe Suite",
    images: [
      "https://hotel1207.com/storage/rooms/kingsuit/61920683d1098-770x460.jpeg",
      "https://hotel1207.com/storage/rooms/kingsuit/61920683d1098-770x460.jpeg",
      "https://hotel1207.com/storage/rooms/kingsuit/61920683d1098-770x460.jpeg"
    ],
    location: "Antalya Kaleiçi",
    description: "Geniş ve lüks Deluxe Suite odamız, ayrı oturma alanı ve muhteşem manzarasıyla unutulmaz bir konaklama deneyimi sunuyor.",
    amenities: [
      { icon: "wifi", name: "Ücretsiz Wi-Fi" },
      { icon: "tv", name: "Düz Ekran TV" },
      { icon: "person", name: "4 Kişilik" },
      { icon: "air-conditioner", name: "Klima" },
      { icon: "bathtub", name: "Jakuzili Banyo" },
      { icon: "minibar", name: "Minibar" },
      { icon: "room-service", name: "24 Saat Oda Servisi" },
      { icon: "balcony", name: "Özel Balkon" }
    ],
    category: ["Lüx"],
    days: "2 days - 1 nights",
    price: 87,
    afterDiscount: 82,
    rating: 1,
    reviews: "Oda",
    size: 45,
    minPerson: 2,
    view: "Panoramik Deniz Manzaralı"
  },
];

export const tourDetails = {
  title: "Beautiful Bali with Malaysia",
  des: ` Bali, also known as the land of gods has plenty to offer to travelers from across the globe. As it so contrasted oh estimating instrument. Size like body some one had.  Are conduct viewing boy minutes warrant the expense?  Tolerably behavior may admit daughters offending her ask own. Praise effect wishes change way and any wanted.  Lively use looked latter regard had. Do he it part more  last in. We understand that theory is important to build a solid foundation, we understand that theory alone isn’t going to get the job done so that’s why this is packed with practical hands-on examples that you can  follow step by step.`,
  price: "280.00",
  rating: " 4.5",
  reviews: "365 reviews",
  tourInfo: [
    '<strong className="font-bold"> Place Covered</strong>: Bali - Ubud',
    ' <strong className="font-bold">Duration:</strong>5 Days, 4 Nights',
    '<strong className="font-bold">Start Point:</strong> Ngurah International Airport',
    '<strong className="font-bold">End Point:</strong>  Ngurah International Airport',
  ],

  highlights: [
    " Experience a delightful tropical getaway with a luxurious stay and witness the picture-perfect beaches, charming waterfalls and so much more",
    " Dependent on so extremely delivered by. Yet no jokes  worse her why. Bed one supposing breakfast day fulfilled off depending questions.",
    " Whatever boy her exertion his extended. Ecstatic  followed handsome drawings entirely Mrs one yet  outweigh.",
    "Meant balls it if up doubt small purse. Required his  you put the outlived answered position. A pleasure exertion if believed provided to.",
  ],

  itinerary: [
    {
      title: `<span class="me-1 fw-bold">Day 1:</span>  Airport Pick Up `,
      des: ` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.`,
    },

    {
      title: `<span class="me-1 fw-bold">Day 2:</span>  Temples & River Cruise `,
      des: ` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in. `,
    },
    {
      title: `<span class="me-1 fw-bold">Day 3:</span>  Massage & Overnight Train`,
      des: ` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.`,
    },
    {
      title: `<span class="me-1 fw-bold">Day 4:</span>  Khao Sok National Park `,
      des: ` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.`,
    },
    {
      title: `<span class="me-1 fw-bold">Day 5:</span>  Travel to Koh Phangan `,
      des: ` Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.
      `,
    },
    {
      title: `<span class="me-1 fw-bold">Day 6:</span> Morning Chill & Muay Thai Lesson `,
      des: `Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.
      `,
    },
  ],

  included: [
    "Comfortable stay for 4 nights in your preferred category Hotels",
    "Professional English speaking guide to help you explore the cities",
    "Breakfast is included as mentioned in Itinerary.",
    "Per Peron rate on twin sharing basis",
    "Entrance Tickets to Genting Indoor Theme Park    ",
    "All Tours & Transfers on Seat In Coach Basis ",
    "Visit Bali Safari & Marine Park with Jungle Hopper Pass    ",
  ],
  exclusion: [
    "Lunch and dinner are not included in CP plans",
    "Any other services not specifically mentioned in the inclusions",
    "Medical and Travel insurance",
    "Airfare is not included ",
    "Early Check-In & Late Check-Out ",
    "Anything which is not specified in Inclusions    ",
  ],

  images: [
    {
      original: image1,
      thumbnail: image1,
    },
    {
      original: image2,
      thumbnail: image2,
    },
    {
      original: image3,
      thumbnail: image3,
    },
    {
      original: image4,
      thumbnail: image4,
    },
    {
      original: image5,
      thumbnail: image5,
    },

    {
      original: image6,
      thumbnail: image6,
    },
    {
      original: image7,
      thumbnail: image7,
    },
    {
      original: image8,
      thumbnail: image8,
    },
  ],
};

export const location = [
  "Bali",
  "Tokyo",
  "Bangkok",
  "Cancun",
  "Nha Trang",
  "Phuket",
  "Malaysia",
  "Paris",
];

export const Categories = [
  "History",
  "Calture",
  "Netural",
  "Urban Tour",
  "Relax",
];

export const Duration = ["1-3 Days", "3-5 Days", "5-7 Days", "7-10 Day"];
export const PriceRange = [
  "$ 0 - $50",
  "$ 50 - $ 100",
  "$ 100 - $ 200",
  "$ 200 - ₹ $ 400",
  "$ 400 - ₹ $ 800",
];

export const Ratings = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"];
