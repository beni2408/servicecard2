import React from "react";
import AllServiceCards from "../Components/AllServiceCards";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const Services = ({ serviceDetails, setServiceDetails }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        sx={{
          marginTop: "50px",
          color: "white",
          background: "red",
          fontWeight: "bold",
          fontFamily: "monospace",
          marginBottom: "50px",
          transition: "all 0.5s ease",
          "&:hover": {
            boxShadow: "10px 10px 0px whitesmoke",
            transform: "scale(1.09)",
          },
        }}
        onClick={() => navigate("services/add")}
      >
        Add New Service +
      </Button>
      <AllServiceCards
        serviceDetails={serviceDetails}
        setServiceDetails={setServiceDetails}
      />
    </div>
  );
};

export default Services;
