import React, { useEffect, useState } from "react";
import ServiceCard from "../Components/ServiceCard";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { REST_HOST_NAME, SERVICE_ENDPOINT } from "../backend";

const ServiceDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    fetch(`${REST_HOST_NAME}/${SERVICE_ENDPOINT}/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((details) => setDetails(details))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {details ? <ServiceCard details={details} /> : <></>}
    </Box>
  );
};

export default ServiceDetails;
