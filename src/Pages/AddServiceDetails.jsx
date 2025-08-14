import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { REST_HOST_NAME, SERVICE_ENDPOINT } from "../backend";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

const AddServiceDetails = ({ serviceDetails, setServiceDetails }) => {
  const [service_provider, setServiceName] = useState("");
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
  const createNewService = async () => {
    try {
      const newService = {
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
      let response = await fetch(`${REST_HOST_NAME}/${SERVICE_ENDPOINT}`, {
        method: "POST",
        body: JSON.stringify(newService),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await response.json();
      if (data) {
        setServiceDetails([...serviceDetails, data]);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "10px",
        width: "700px",
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
        }}
      >
        Add new Services
      </Typography>
      <TextField
        sx={{
          input: { color: "white" }, // input text
          label: { color: "white" }, // label text
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white", // default border
            },
            "&:hover fieldset": {
              borderColor: "white", // hover border
            },
            "&.Mui-focused fieldset": {
              borderColor: "white", // focused border
            },
          },
        }}
        id="outlined-basic"
        label="service_provider"
        variant="outlined"
        value={service_provider}
        onChange={(e) => setServiceName(e.target.value)}
      />
      <TextField
        sx={{
          input: { color: "white" }, // input text
          label: { color: "white" }, // label text
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white", // default border
            },
            "&:hover fieldset": {
              borderColor: "white", // hover border
            },
            "&.Mui-focused fieldset": {
              borderColor: "white", // focused border
            },
          },
        }}
        id="outlined-basic"
        label="vechicle_type"
        variant="outlined"
        value={vechicle_type}
        onChange={(e) => setVechicle_type(e.target.value)}
      />
      <TextField
        sx={{
          input: { color: "white" }, // input text
          label: { color: "white" }, // label text
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white", // default border
            },
            "&:hover fieldset": {
              borderColor: "white", // hover border
            },
            "&.Mui-focused fieldset": {
              borderColor: "white", // focused border
            },
          },
        }}
        id="outlined-basic"
        label="vechicle_number"
        variant="outlined"
        value={vechicle_number}
        type="number"
        onChange={(e) => setVechicle_number(e.target.value)}
      />
      <TextField
        sx={{
          input: { color: "white" }, // input text
          label: { color: "white" }, // label text
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white", // default border
            },
            "&:hover fieldset": {
              borderColor: "white", // hover border
            },
            "&.Mui-focused fieldset": {
              borderColor: "white", // focused border
            },
          },
        }}
        id="outlined-basic"
        label="date_of_service"
        variant="outlined"
        value={date_of_service}
        type="number"
        onChange={(e) => setDate_of_service(e.target.value)}
      />
      <TextField
        sx={{
          input: { color: "white" }, // input text
          label: { color: "white" }, // label text
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white", // default border
            },
            "&:hover fieldset": {
              borderColor: "white", // hover border
            },
            "&.Mui-focused fieldset": {
              borderColor: "white", // focused border
            },
          },
        }}
        id="outlined-basic"
        label="date_of_delivery"
        variant="outlined"
        type="number"
        value={date_of_delivery}
        onChange={(e) => setDate_of_delivery(e.target.value)}
      />
      <TextField
        sx={{
          input: { color: "white" }, // input text
          label: { color: "white" }, // label text
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white", // default border
            },
            "&:hover fieldset": {
              borderColor: "white", // hover border
            },
            "&.Mui-focused fieldset": {
              borderColor: "white", // focused border
            },
          },
        }}
        id="outlined-basic"
        label="service_details"
        variant="outlined"
        value={service_details}
        onChange={(e) => setService_details(e.target.value)}
      />
      <TextField
        sx={{
          input: { color: "white" }, // input text
          label: { color: "white" }, // label text
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white", // default border
            },
            "&:hover fieldset": {
              borderColor: "white", // hover border
            },
            "&.Mui-focused fieldset": {
              borderColor: "white", // focused border
            },
          },
        }}
        id="outlined-basic"
        label="service_amount"
        variant="outlined"
        type="number"
        value={service_amount}
        onChange={(e) => setService_amount(e.target.value)}
      />
      <TextField
        sx={{
          input: { color: "white" }, // input text
          label: { color: "white" }, // label text
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white", // default border
            },
            "&:hover fieldset": {
              borderColor: "white", // hover border
            },
            "&.Mui-focused fieldset": {
              borderColor: "white", // focused border
            },
          },
        }}
        id="outlined-basic"
        label="contact"
        variant="outlined"
        type="number"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />
      <TextField
        sx={{
          input: { color: "white" }, // input text
          label: { color: "white" }, // label text
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white", // default border
            },
            "&:hover fieldset": {
              borderColor: "white", // hover border
            },
            "&.Mui-focused fieldset": {
              borderColor: "white", // focused border
            },
          },
        }}
        id="outlined-basic"
        label="location"
        variant="outlined"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <TextField
        sx={{
          input: { color: "white" }, // input text
          label: { color: "white" }, // label text
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white", // default border
            },
            "&:hover fieldset": {
              borderColor: "white", // hover border
            },
            "&.Mui-focused fieldset": {
              borderColor: "white", // focused border
            },
          },
        }}
        id="outlined-basic"
        label="insurance_due_date"
        variant="outlined"
        type="number"
        value={insurance_due_date}
        onChange={(e) => setInsurance_due_date(e.target.value)}
      />
      <Button
        sx={{
          marginTop: "10px",
          color: "white",
          background: "red",
          fontWeight: "bold",
          fontFamily: "monospace",
          marginBottom: "150px",
        }}
        onClick={createNewService}
      >
        Add
      </Button>
    </Box>
  );
};

export default AddServiceDetails;
