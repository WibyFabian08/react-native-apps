// const myProfile = {
//     name: "ByProgrammers",
//     profile_image: require("../assets/images/profile.png"),
//     address: "No. 88, Jln Padungan, Kuching"
// }

const myCards = [
  {
    id: 1,
    name: "Master Card",
    icon: require('../src/assets/icons/masterCardIcon.png')
  },
  {
    id: 2,
    name: "Apple Pay",
    icon: require('../src/assets/icons/applePayIcon.png')
  },
]

const payments = [
  {
    id: 1,
    name: "Master Card",
    icon: require('../src/assets/icons/masterCardIcon.png')
  },
  {
    id: 2,
    name: "Apple Pay",
    icon: require('../src/assets/icons/applePayIcon.png')
  },
  {
    id: 3,
    name: "Visa",
    icon: require('../src/assets/icons/visaIcon.png')
  },
  {
    id: 4,
    name: "Pay Pal",
    icon: require('../src/assets/icons/paypalIcon.png')
  },
]

const categories = [
  {
    id: 1,
    name: 'Fast Food',
    icon: require('../src/assets/icons/burger.png'),
  },
  {
    id: 2,
    name: 'Fruit Item',
    icon: require('../src/assets/icons/cherry.png'),
  },
  {
    id: 3,
    name: 'Rice Item',
    icon: require('../src/assets/icons/rice.png'),
  },
  {
    id: 4,
    name: 'Junk Food',
    icon: require('../src/assets/icons/burger.png'),
  },
];

const hamburger = {
  id: 1,
  name: 'Hamburger',
  description: 'Chicken patty hamburger',
  categories: [1, 2],
  price: 15.99,
  calories: 78,
  isFavourite: true,
  image: require('../src/assets/images/hamburger.png'),
};

const hotTacos = {
  id: 2,
  name: 'Hot Tacos',
  description: 'Mexican tortilla & tacos',
  categories: [1, 3],
  price: 10.99,
  calories: 78,
  isFavourite: false,
  image: require('../src/assets/images/hot_tacos.png'),
};

const vegBiryani = {
  id: 3,
  name: 'Veg Biryani',
  description: 'Indian Vegetable Biryani',
  categories: [1, 2, 3],
  price: 10.99,
  calories: 78,
  isFavourite: true,
  image: require('../src/assets/images/veg_biryani.png'),
};

const wrapSandwich = {
  id: 4,
  name: 'Wrap Sandwich',
  description: 'Grilled vegetables sandwich',
  categories: [1, 2],
  price: 10.99,
  calories: 78,
  isFavourite: true,
  image: require('../src/assets/images/wrap_sandwich.png'),
};

let myCart = [
  {
    id: 1,
    name: 'Hamburger',
    price: 15.99,
    image: require('../src/assets/images/hamburger.png'),
    qty: 1
  },
  {
    id: 2,
    name: 'Hot Tacos',
    price: 10.99,
    image: require('../src/assets/images/hot_tacos.png'),
    qty: 1
  },
  {
    id: 3,
    name: 'Veg Biryani',
    price: 10.99,
    image: require('../src/assets/images/veg_biryani.png'),
    qty: 1
  },
  {
    id: 4,
    name: 'Wrap Sandwich',
    price: 10.99,
    image: require('../src/assets/images/wrap_sandwich.png'),
    qty: 1
  },
];

const listMenu = [
  {
    id: 1,
    name: 'Hamburger',
    description: 'Chicken patty hamburger',
    categories: [1, 2],
    price: 15.99,
    calories: 78,
    isFavourite: true,
    image: require('../src/assets/images/hamburger.png'),
  },
  {
    id: 2,
    name: 'Hot Tacos',
    description: 'Mexican tortilla & tacos',
    categories: [1, 3],
    price: 10.99,
    calories: 78,
    isFavourite: false,
    image: require('../src/assets/images/hot_tacos.png'),
  },
  {
    id: 3,
    name: 'Veg Biryani',
    description: 'Indian Vegetable Biryani',
    categories: [1, 2, 3],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require('../src/assets/images/veg_biryani.png'),
  },
  {
    id: 4,
    name: 'Wrap Sandwich',
    description: 'Grilled vegetables sandwich',
    categories: [1, 2],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require('../src/assets/images/wrap_sandwich.png'),
  },
];

const menu = [
  {
    id: 1,
    name: 'Featured',
    list: [hamburger, hotTacos, vegBiryani],
  },
  {
    id: 2,
    name: 'Nearby you',
    list: [hamburger, vegBiryani, wrapSandwich],
  },
  {
    id: 3,
    name: 'Popular',
    list: [hamburger, hotTacos, wrapSandwich],
  },
  {
    id: 4,
    name: 'Newest',
    list: [hamburger, hotTacos, vegBiryani],
  },
  {
    id: 5,
    name: 'Trending',
    list: [hamburger, vegBiryani, wrapSandwich],
  },
  {
    id: 6,
    name: 'Recommended',
    list: [hamburger, hotTacos, wrapSandwich],
  },
];

export default {
  // myProfile,
  myCards,
  payments,
  myCart,
  categories,
  menu,
  listMenu,
};
