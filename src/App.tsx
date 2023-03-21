import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import logo from "./logo.svg";
import "./App.css";
import { Home } from "./pages/home/Home";
import { BeatLoader, CircleLoader, PulseLoader } from "react-spinners";
import { Services } from "./pages/services/Services";
import axios from "axios";
import { SaveData } from "./redux-store/action";
import SparePage from "./pages/spare-page/SparePage";
import Routing from "./routes/Routing";
import { SecureCheckout } from "./components/servicePriceComp/checkoutCard/secureCheckout/SecureCheckout";
import { uiData } from "./assets/images/UIdata/uiData";
function App() {
  const [loading, setLoading] = useState(false);
  const [selectedCar, setSelectedCar] = useState();
  const dispatch = useDispatch();

  useEffect(() => {

        dispatch(SaveData(uiData));
 
  },   []);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

  const selectedCarHandler = (data: any) => {
    setSelectedCar(data);
  };
  return (
    <div>
 
  
      <Routing
                selectedCarHandler={selectedCarHandler}
        selectedCar={selectedCar}
      />
      {/* <SecureCheckout /> */}
    </div>
  );
}
export default App;
