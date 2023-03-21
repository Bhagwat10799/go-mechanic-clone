import React, { useState } from "react";
import Card from "@mui/material/Card";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import styles from "./AddAddress.module.css";
export const AddAddress = ({ isAddress }: any) => {
  const [address, setAddress] = useState({ locality: "", flatRoom: "" });
  const [addressAdded, setAddressAdded] = useState(false);
  const localityHandler = (event: any) => {
    setAddress({ ...address, locality: event.target.value });
  };
  const flatRoomHandler = (event: any) => {
    setAddress({ ...address, flatRoom: event.target.value });
  };

  const continueHandler = () => {
    setAddressAdded(true);
  };

  return (
    <>
      {!isAddress ? (
        <Card
          variant="outlined"
          sx={{
            maxWidth: 730,
            height: 140,
            borderRadius: "0",
            marginTop: 4,
            padding: " 1.5em 1.8em",
          }}
        >
          <h4 className={styles["address-container-h4"]}>
            Select/ Add Address
          </h4>
        </Card>
      ) : (
        !addressAdded && (
          <Card
            variant="outlined"
            sx={{
              maxWidth: 730,
              // height: 140,
              borderRadius: "0",
              marginTop: 4,
              position: "relative",
              borderLeft: "2px solid #e73c33",
              padding: " 1.5em 1.8em",
            }}
          >
            {" "}
            <div className={`${styles["address-container"]} `}>
              <h4 className={styles["address-container-h4"]}>
                Select/ Add Address
              </h4>
              <p>Select from saved address or add a new address</p>
              <div>
                <p>Enter a new Address</p>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Locality *"
                    onChange={localityHandler}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Flat Number/Room Number/Suite(Optional)"
                    onChange={flatRoomHandler}
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className={styles["continuebtn-container"]}>
              <button
                className="btn btn-danger position-absolute bottom-0 end-0 m-2"
                onClick={continueHandler}
              >
                CONTINUE <ArrowForwardIcon />
              </button>
            </div>
          </Card>
        )
      )}
      {addressAdded && (
        <Card
          variant="outlined"
          sx={{
            maxWidth: 730,
            height: 150,
            borderRadius: "0",
            marginTop: 4,
            padding: " 1.5em 1.8em",
          }}
        >
          <div>
            <h4>Select/ Add Address</h4>
            <div className={styles["selected-address "]}>
              {address.locality}
              {address.flatRoom}
            </div>
          </div>
        </Card>
      )}
    </>
  );
};
