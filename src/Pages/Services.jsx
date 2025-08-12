import React from "react";
import AllServiceCards from "../Components/AllServiceCards";

const Services = ({ serviceDetails }) => {
  return (
    <div>
      <AllServiceCards serviceDetails={serviceDetails} />
    </div>
  );
};

export default Services;
