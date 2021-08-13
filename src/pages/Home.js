import React from "react";
import Header from "../components/HeaderComponent/Header";
import Banner from "../components/BannerComponent/Banner";
import BestTours from "../components/BestToursComponent/BestTours";
import Feature from "../components/FeatureComponent/Feature";
import NewsSection from "../components/NewsSectionComponent/NewsSection";
import Footer from "../components/FooterComponent/Footer";
export default function Home() {
  return (
    <div>
      <Banner />
      <BestTours />
      <Feature />
      <NewsSection />
    </div>
  );
}
