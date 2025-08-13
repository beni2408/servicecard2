import React from "react";
import AllServiceCards from "../Components/AllServiceCards";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Services = ({ serviceDetails }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate("services/add")}>Add New Service</Button>
      <AllServiceCards serviceDetails={serviceDetails} />
    </div>
  );
};

export default Services;
