import {
  CandleLeafIcon,
  HumanLogo,
  Cart,
  LeafBackground,
  Leaf,
  ProductsHeader,
  Product,
} from "./index";

export const CandleLeaf = () => {
  return (
    <div>
      <div className="">
        <div className="flex items-center justify-around h-20">
          <div className="flex items-center">
            <CandleLeafIcon />
            <p className="text-green-500">Candleleaf</p>
          </div>
          <div className="flex items-center gap-12">
            <p>Discovery</p>
            <button>About</button>
            <button>Contact us</button>
          </div>
          <div className="flex items-center gap-10">
            <HumanLogo />
            <Cart />
          </div>
        </div>
        <div>
          <div className="relative ">
            <LeafBackground className="w-full h-auto " />
            <div className=" bg-white w-2/4 h-72 text-center absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Leaf />
              <p className="text-4xl">The nature candle</p>
              <p className="pb-12">
                All handmade with natural soy wax, Candleleaf is companion for
                all your pleasure moments
              </p>
              <button className="bg-green-600 text-white w-80 h-10 rounded-md ">
                Discovery your collection
              </button>
            </div>
          </div>
        </div>
      </div>
      <ProductsHeader />
      <Product />
    </div>
  );
};
