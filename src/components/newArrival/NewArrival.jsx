import Heading from "../heading/Heading";
import CallToAction from "./CallToAction";
import Products from "./Products";

const NewArrival = () => {
  return (
    <div>
      <div className="pt-16 sm:pt-24 lg:pt-40">
        <Heading />
        <CallToAction />
        <Products />
      </div>
    </div>
  );
};

export default NewArrival;
