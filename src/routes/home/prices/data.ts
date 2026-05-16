export type IServiceItem = {
  id: number;
  price: number;
  service: string;
  plus?: boolean;
  note?: string;
};

export type IServiceCategory = {
  header: string;
  items: IServiceItem[];
};

export const Data: IServiceCategory[] = [
  {
    header: "Acrylic Nails",
    items: [
      { id: 1, price: 33, service: "Full Set Acrylics & Normal Colour" },
      { id: 2, price: 23, service: "Infills & Normal Colour" },
      { id: 3, price: 37, service: "Full Set Acrylics & Gel Colour" },
      { id: 4, price: 27, service: "Infills & Gel Colour" },
      { id: 5, price: 40, service: "Full Set Pink & White / Gel Glitter" },
      { id: 6, price: 35, service: "Infills Pink & White / Gel Glitter" },
      { id: 7, price: 40, service: "Full Set Ombre" },
      { id: 8, price: 38, service: "Infills Ombre" },
      { id: 9, price: 45, service: "Take-off & Full Set Ombre" }
    ]
  },

  {
    header: "Gel Colour",
    items: [
      { id: 10, price: 25, service: "Gel Colour on Natural Nails", note: "take-off +£2" },
      { id: 11, price: 22, service: "Gel Colour on Toes", note: "take-off +£2" }
    ]
  },

  {
    header: "BIAB Builder Gel",
    items: [
      { id: 12, price: 37, service: "BIAB on Natural Nails" },
      { id: 13, price: 45, service: "Full Set BIAB with Tips" }
    ]
  },

  {
    header: "Removals",
    items: [
      { id: 14, price: 12, service: "Take-off Powder" },
      { id: 15, price: 10, service: "Take-off Gel / BIAB" },
      { id: 16, price: 42, service: "Take-off Acrylics & BIAB" },
      { id: 17, price: 30, service: "Take-off Acrylics & Gel" }
    ]
  },
  {
    header: "Extras",
    items: [
      { id: 18, price: 5, service: "Curved White Tips", plus: true },
      { id: 19, price: 7, service: "Chrome Effect", plus: true },
      { id: 20, price: 7, service: "Cat Eye Effect", plus: true },
      { id: 21, price: 3, service: "Diamonds", plus: true },
      { id: 22, price: 3, service: "One Nail Repair", plus: true },
      { id: 23, price: 7, service: "Nail Art", plus: true, note: "price differs depending on design" }
    ]
  },

  {
    header: "Manicure - Pedicure",
    items: [
      { id: 24, price: 20, service: "Manicure & Normal Colour" },
      { id: 25, price: 30, service: "Manicure & Gel Colour" },
      { id: 26, price: 30, service: "Pedicure & Normal Colour" },
      { id: 27, price: 36, service: "Pedicure & Gel Colour" },
      { id: 28, price: 37, service: "Pedicure & Gel White Tips" },
      { id: 29, price: 50, service: "Special Pedicure With Natural Products" },
      { id: 30, price: 15, service: "Hands - File & Polish", note: "white tips +£3" },
      { id: 31, price: 15, service: "Toes - File & Polish", note: "white tips +£3" }
    ]
  },

  {
    header: "Facial Waxing - Threading",
    items: [
      { id: 32, price: 7, service: "Eyebrow Waxing" },
      { id: 33, price: 8, service: "Eyebrow Threading" },
      { id: 34, price: 5, service: "Upper Lip Wax / Thread" },
      { id: 35, price: 5, service: "Chin Wax / Thread" },
      { id: 36, price: 5, service: "Cheeks Wax / Thread" },
      { id: 37, price: 22, service: "Full Face Wax" }
    ]
  },

  {
    header: "Tinting",
    items: [
      { id: 38, price: 8, service: "Eyebrow Tint" },
      { id: 39, price: 8, service: "Eyelash Tint" },
      { id: 40, price: 15, service: "Lash & Brow Tint" }
    ]
  },

  {
    header: "Semi Permanent Makeup",
    items: [
      { id: 41, price: 250, service: "Microblading" },
      { id: 42, price: 100, service: "6 week Microblading Top Up" },
      { id: 43, price: 180, service: "1+ year Microblading Top Up" }
    ]
  },

  {
    header: "Body Waxing",
    items: [
      { id: 44, price: 25, service: "Half leg" },
      { id: 45, price: 35, service: "Full leg" },
      { id: 46, price: 12, service: "Underarm" }
    ]
  },

  {
    header: "Body Massage",
    items: [
      { id: 47, price: 20, service: "15 Min Foot Massage" },
      { id: 48, price: 48, service: "1 Hour Full Body Massage" }
    ]
  }
];