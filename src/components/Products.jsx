import { ProductImg } from "./ProductImg";

const candle = [
  {
    name: "Spiced Mint",
    price: 9.99,
    image:
      "https://www.travelandleisure.com/thmb/N9oBmq5p4GcobEskgfspGwz4Pss=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1333022193-6959a862a1e24bf4abcc9b3a92f65b8b.jpg",
  },
  {
    name: "Sweet Strawberry",
    price: 9.99,
    image:
      "https://www.slownorth.com/cdn/shop/files/SlowNorth_Bouqet23_grande.jpg?v=1695996172",
  },
];

export const Product = (props) => {
  candle.map((product) => {
    return <Product />;
  });
  return (
    <div className="bg-slate-200 w-64 shadow-xl ml-20 mt-10">
      <div>
        <ProductImg />
      </div>
      <div>
        <p className="">Spiced Mint</p>
      </div>
      <div>
        <p className="text-lime-600 text-end">9.99$</p>
      </div>
    </div>
  );
};
