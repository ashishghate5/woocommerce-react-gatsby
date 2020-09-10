import React from 'react';
import TopSection from "../components/Home/TopSection/TopSection"
import NewArrivals from "../components/Home/NewArrivals/NewArrivals"
import Products from "../components/Home/Products/Products"
import ProductsSlide from "../components/Home/ProductSlides/ProductsSlide"
import WeekTop from "../components/Home/WeekTop/WeekTop"
import AdoptStyles from "../components/Home/AdoptStyles/AdoptStyles"
import BecomeMuses from "../components/Home/BecomeMuses/BecomeMuses"
import Story from "../components/Home/Story/Story"
import NewsLetter from "../components/Home/NewsLetters/NewLettters"
import Services from "../components/Home/Services/Services"
import Newses from "../components/Home/Newses/Newses"
import BottomLists from "../components/Home/BottomLists/BottomLists"

const Home = () => {
  return (
    <>
      <TopSection />
      <NewArrivals />
      <Products />
      <ProductsSlide />
      <WeekTop />
      <AdoptStyles />
      <BecomeMuses />
      <Story />
      <NewsLetter />
      <Services />
      <Newses />
      <BottomLists />
    </>
  );
}

export default Home;
