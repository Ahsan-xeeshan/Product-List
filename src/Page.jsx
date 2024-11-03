import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NewArrival from "./components/newArrival/NewArrival";

const Page = () => {
  return (
    <div>
      <Header />
      <Banner />
      <NewArrival />
      <Footer />
    </div>
  );
};

export default Page;
