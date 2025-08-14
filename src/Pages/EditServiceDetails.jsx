import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { REST_HOST_NAME, SERVICE_ENDPOINT } from "../backend";

const EditServiceDetails = ({ serviceDetails, setServiceDetails }) => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [service_provider, setServiceName] = useState();
  const [vechicle_type, setVechicle_type] = useState("");
  const [vechicle_number, setVechicle_number] = useState();
  const [date_of_service, setDate_of_service] = useState();
  const [date_of_delivery, setDate_of_delivery] = useState();
  const [service_details, setService_details] = useState("");
  const [service_amount, setService_amount] = useState("");
  const [contact, setContact] = useState();
  const [location, setLocation] = useState("");
  const [insurance_due_date, setInsurance_due_date] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${REST_HOST_NAME}/${SERVICE_ENDPOINT}/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((details) => {
        setServiceName(details.service_provider);
        setVechicle_type(details.vechicle_type);
        setVechicle_number(details.vechicle_number);
        setDate_of_service(details.date_of_service);
        setDate_of_delivery(details.date_of_delivery);
        setService_details(details.service_details);
        setService_amount(details.service_amount);
        setContact(details.contact);
        setLocation(details.location);
        setInsurance_due_date(details.insurance_due_date);
        setDetails(details);
      })
      .catch((err) => console.log(err));
  }, [id]);

  async function updateNewService() {
    const updatedService = {
      service_provider,
      vechicle_type,
      vechicle_number,
      date_of_service,
      date_of_delivery,
      service_details,
      service_amount,
      contact,
      location,
      insurance_due_date,
    };

    let response = await fetch(`${REST_HOST_NAME}/${SERVICE_ENDPOINT}/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedService),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await response.json();
    if (data) {
      const selectedServiceIndex = serviceDetails.findIndex(
        (details) => details.id == id
      );
      serviceDetails[selectedServiceIndex] = data;
      setServiceDetails([...serviceDetails]);
      navigate("/");
    }
  }

  return (
    <>
      {details && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "10px",
            width: "700px",
            margin: "0 auto", // center the form

            // Responsive widths
            "@media (max-width: 600px)": {
              width: "90%",
              padding: "5px",
            },
            "@media (min-width: 601px) and (max-width: 1024px)": {
              width: "80%",
              padding: "8px",
            },
            "@media (min-width: 1025px)": {
              width: "700px",
            },
          }}
        >
          <Typography
            sx={{
              marginTop: "150px",
              color: "white",
              fontFamily: "monospace",
              fontSize: "40px",
              marginBottom: "20px",
              fontWeight: "Bold",

              // Mobile title size
              "@media (max-width: 600px)": {
                fontSize: "28px",
                marginTop: "50px",
              },
            }}
          >
            Edit service details
          </Typography>

          {[
            [service_provider, setServiceName],
            [vechicle_type, setVechicle_type],
            [vechicle_number, setVechicle_number, "number"],
            [date_of_service, setDate_of_service, "number"],
            [date_of_delivery, setDate_of_delivery, "number"],
            [service_details, setService_details],
            [service_amount, setService_amount, "number"],
            [contact, setContact, "number"],
            [location, setLocation],
            [insurance_due_date, setInsurance_due_date, "number"],
          ].map(([value, setter, type], idx) => (
            <TextField
              key={idx}
              sx={{
                input: { color: "white" },
                label: { color: "white" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
              }}
              variant="outlined"
              value={value}
              type={type || "text"}
              onChange={(e) => setter(e.target.value)}
            />
          ))}

          <Button
            sx={{
              color: "black",
              background: "skyblue",
              fontWeight: "bold",
              fontFamily: "monospace",
              marginBottom: "150px",

              // Button responsive
              "@media (max-width: 600px)": {
                fontSize: "14px",
                padding: "8px 12px",
              },
            }}
            onClick={updateNewService}
          >
            Edit
          </Button>
        </Box>
      )}
    </>
  );
};

export default EditServiceDetails;
