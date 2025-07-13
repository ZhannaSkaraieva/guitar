export interface Guitar {
  id: number;
  title: string;
  reviews: string;
  rating: number;
  article: string;
  type: string;
  strings: number;
  description: string;
  price: string;
  stocked: boolean;
  image: string;
}

const Guitars: Guitar[] = [
  {
    id: 1,
    title: "СURT Z30 Plus Acoustics",
    reviews: "",
    rating: 4,
    article: "SO754565",
    type: "Элетрогитара",
    strings: 7,
    description: "Электрогитара с 7 струнами, идеальная для",
    price: "12000",
    stocked: true,
    image: "/image/ElectroAcoustic.png",
  },
  {
    id: 2,
    title: "СURT Z30 Plus",
    reviews: "",
    rating: 4.5,
    article: "SO754566",
    type: "Элетрогитара",
    strings: 6,
    description: "Электрогитара с 6 струнами, идеальная для",
    price: "9700",
    stocked: true,
    image: "/image/Electro.png",
  },
  {
    id: 3,
    title: "Честер Bass",
    reviews: "",
    rating: 4.5,
    article: "SO754567",
    type: "Акустическая",
    strings: 7,
    description: "Акустическая гитара с 7 струнами, идеальная для",
    price: "15000",
    stocked: true,
    image: "/image/ElectroBass.png",
  },
  {
    id: 4,
    title: "Укулеле",
    reviews: "",
    rating: 4.5,
    article: "SO754568",
    type: "Укулеле",
    strings: 4,
    description: "Укулеле с 4 струнами, идеальная для",
    price: "0",
    stocked: false,
    image: "/image/Ukulele.png",
  },
];

export default Guitars;
