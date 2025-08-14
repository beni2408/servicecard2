import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { REST_HOST_NAME, SERVICE_ENDPOINT } from "../backend";

function ServiceCard({ details, serviceDetails, setServiceDetails }) {
  const navigate = useNavigate();
  async function deleteService(id) {
    try {
      let response = await fetch(
        `${REST_HOST_NAME}/${SERVICE_ENDPOINT}/${id}`,
        {
          method: "DELETE",
        }
      );
      let data = await response.json();
      if (data) {
        let deleteService = serviceDetails.filter(
          (details) => details.id !== id
        );
        setServiceDetails([...deleteService]);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Box>
      <Paper
        elevation={3}
        sx={{
          cursor: "pointer",
          height: "200px",
          width: "300px",
          padding: "20px",
        }}
      >
        <Stack spacing={4}>
          <Paper elevation={2}>
            <Typography>{details.service_provider}</Typography>
            <Typography>{details.location}</Typography>
          </Paper>
          <Box>
            <Typography>{details.vechicle_type}</Typography>
            <Typography>{details.date_of_delivery}</Typography>
            <Typography>{details.service_amount}</Typography>
            <Box
              sx={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}
            >
              <Button
                color="primary"
                variant="contained"
                onClick={() => navigate(`/services/${details.id}`)}
              >
                View
              </Button>
              <Button
                color="secondary"
                variant="contained"
                onClick={() => navigate(`/services/edit/${details.id}`)}
              >
                EDIT
              </Button>
              <Button
                color="error"
                variant="contained"
                onClick={() => deleteService(details.id)}
              >
                DELETE
              </Button>
            </Box>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
}

export default ServiceCard;
