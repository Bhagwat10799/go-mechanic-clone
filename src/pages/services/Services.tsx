import styles from "./Servics.module.css";
import { AppHeader } from "../../components/reusable/header/AppHeader";

import RatingDiv from "../../components/reusable/ratingModule/ratingDiv";
import ServiceTabs from "../../components/servicePriceComp/serviceTabs/ServiceTabs";
import { HondaAmaze } from "../../components/servicePriceComp/customerQuotes/HondaAmaze/HondaAmaze";
import { AskedQuestions } from "../../components/servicePriceComp/AskedQuetions/AskedQuetions";
import Key_Specs from "../../components/servicePriceComp/keySpecs/Key_Specs";
import { Reviews } from "../../components/servicePriceComp/reviewsPeriodicServices/Reviews";
import { useState } from "react";
import { CheckoutCard } from "../../components/servicePriceComp/checkoutCard/CheckoutCard";
import { WhyHonda } from "../../components/servicePriceComp/whyChooseForBrand/WhyHonda";
import { SwiperComp } from "../../components/reusable/Swiper/SwiperComp";
import { PopularServices } from "../../components/servicePriceComp/Populars/PopularServices";
import { PopularRegion } from "../../components/servicePriceComp/popularRegion/PopularRegion";
import { HowDone } from "../../components/servicePriceComp/HowItWorks/HowDone";

export function Services({ selectedCar }: any) {
  const [cityName, setCityName] = useState("Pune");
  const [checkoutData, setCheckoutData] = useState([]);
  const getCityName = (city: string) => {
    setCityName(city);
  };
  const checkoutDataHandler = (data: any) => {
    setCheckoutData(data);
  };
  return (
    <div>
      <AppHeader bgColor="black" getCityName={getCityName} />
      <div className="d-flex">
        <div className={styles["sliding-tabs"]}>
          <ServiceTabs />
          <div className={styles["home-content"]}>
            <RatingDiv />
            <HowDone />
            <HondaAmaze />
            <AskedQuestions />
            <Key_Specs />
            <WhyHonda />
            <Reviews />
            <PopularServices />
            <PopularRegion />
          </div>
        </div>
        <CheckoutCard selectedCar={selectedCar} />
      </div>
    </div>
  );
}
