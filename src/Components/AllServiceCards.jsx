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
