import product1 from "../../assets/Categories/Amul/AmulButter.avif";
import product2 from "../../assets/Categories/Amul/amulMilk.avif";

// Dummy data – replace these with actual images & product details

const categoriesBySection = {
  pharmacy: [
    {
      id: 1,
      name: "Sanitizers",
      products: [
        {
          id: 101,
          name: "Dettol Original Instant Hand Sanitizer",
          image: product1,
          weight: "50 ml",
          price: 34,
          oldPrice: 35,
          time: "8 MINS",
        },
        {
          id: 102,
          name: "Dettol Alcohol Based Sanitizer",
          image: product2,
          weight: "200 ml",
          price: 119,
          oldPrice: 125,
          time: "8 MINS",
        },
      ],
    },
    {
      id: 2,
      name: "Masks",
      products: [
        {
          id: 201,
          name: "Control D N95 Mask (White)",
          image: product1,
          weight: "1 unit",
          price: 40,
          oldPrice: 50,
          time: "8 MINS",
        },
        {
          id: 202,
          name: "Filixtrue 3 Ply Mask (Blue)",
          image: product2,
          weight: "50 pcs",
          price: 242,
          oldPrice: 499,
          time: "8 MINS",
        },
      ],
    },
  ],

  "pet-care": [
    {
      id: 3,
      name: "Dog Food",
      products: [
        {
          id: 301,
          name: "Pedigree Adult Dog Food",
          image: product1,
          weight: "3 kg",
          price: 699,
          oldPrice: 750,
          time: "10 MINS",
        },
        {
          id: 302,
          name: "Drools Chicken Dog Food",
          image: product2,
          weight: "1.2 kg",
          price: 299,
          oldPrice: 330,
          time: "10 MINS",
        },
      ],
    },
  ],

  "baby-care": [
    {
      id: 4,
      name: "Diapers",
      products: [
        {
          id: 401,
          name: "Pampers Premium Pants",
          image: product1,
          weight: "XL - 22 pcs",
          price: 499,
          oldPrice: 599,
          time: "9 MINS",
        },
        {
          id: 402,
          name: "Huggies Dry Diapers",
          image: product2,
          weight: "M - 36 pcs",
          price: 445,
          oldPrice: 500,
          time: "9 MINS",
        },
      ],
    },
  ],
};

export default categoriesBySection;
