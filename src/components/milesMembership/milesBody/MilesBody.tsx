import React from "react";
import styles from "../milesBody/MilesBody.module.css";
const MilesBody = () => {
  return (
    <>
      <div className={styles["m-body"]}>
        <div className={styles["sub-div"]}>
          <div className={styles["sub-div-body"]}>
            <h3>Save Upto ₹ 20700</h3>
            <h6>Annually on your Maruti Suzuki WagonR</h6>
          </div>
          <div className="d-flex mt-4 ">
            <div className={styles["sub-body"]}>
              <h5>Extra Discounts on 100+ Services</h5>
              <p>
                • Upto 25% Extra Off <br />• 12 Months Validity
              </p>
            </div>
            <div className={styles["sec-sub-body"]}>
              <h5>Free Road Side Assistance</h5>
              <p>
                • 2 Free SOS Services <br />• Discounts on 1000+ Accessories
              </p>
            </div>
          </div>
        </div>
        <p className={styles["para"]}>17648 users have joined Miles last week</p>
      </div>
    </>
  );
};

export default MilesBody;
