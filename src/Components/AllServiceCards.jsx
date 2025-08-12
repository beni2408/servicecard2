import React from "react";
import ServiceCard from "./ServiceCard";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AllServiceCards = ({ serviceDetails }) => {
  const navigate = useNavigate();
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
        <Box onClick={() => navigate(`/services/${details.id}`)} key={idx}>
          <ServiceCard details={details} />
        </Box>
      ))}
    </Box>
  );
};

export default AllServiceCards;
