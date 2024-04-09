import img1 from "../../../../../../assets/images/shop/image 9ps5 3.png";
import img2 from "../../../../../../assets/images/shop/image 10ps5 1.png";
import img3 from "../../../../../../assets/images/shop/image 11ps5 2.png";
import img4 from "../../../../../../assets/images/shop/Rectangle 3ps4 1.png";
import img5 from "../../../../../../assets/images/shop/Rectangle 6ps4 2.png";
import img6 from "../../../../../../assets/images/shop/Rectangle 11.png";

const products = [
  {
    id: 1,
    title: "PS5 Slim 1TB",
    price: 2.289000,
    availability: 10,
    description: "The PS5 Slim is a compact gaming console with a modern design, delivering powerful gaming experiences.",
    detailedDescription: "Description for Product 1hjhgjgjhy",
    technicalInfo: "Hola",
    img: img1,
    images: [img1, img2, img3], // Agrega todas las imágenes relacionadas con el producto aquí
  },
  {
    id: 2,
    title: "Product 2",
    price: 150,
    availability: 5,
    description: "Description for Product 2",
    detailedDescription: "Description for Product 1",
    technicalInfo: "Hola",
    img: img4,
    images: [img4, img5, img6], // Agrega todas las imágenes relacionadas con el producto aquí
  },
  // Otros productos...
];

export default products;