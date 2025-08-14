import React from "react";
import ServiceCard from "./ServiceCard";
import { Box } from "@mui/material";

const AllServiceCards = ({ serviceDetails, setServiceDetails }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "1rem",
        margin: "20px",

        // Media queries
        "@media (max-width: 600px)": {
          flexDirection: "column", // Stack on mobile
          alignItems: "center",
        },
        "@media (min-width: 601px) and (max-width: 1024px)": {
          flexDirection: "row",
          justifyContent: "center", // Tablet
        },
        "@media (min-width: 1025px)": {
          justifyContent: "flex-start", // Laptop & Desktop
        },
      }}
    >
      {serviceDetails?.map((details, idx) => (
        <ServiceCard
          details={details}
          key={idx}
          serviceDetails={serviceDetails}
          setServiceDetails={setServiceDetails}
        />
      ))}
    </Box>
  );
};

export default AllServiceCards;
