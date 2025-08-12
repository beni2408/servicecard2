import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const AddServiceDetails = () => {
  const [serviceName, setServiceName] = useState("");
  const createNewService = () => {
    const newService = {
      service_name: serviceName,
    };
    console.log(newService);
  };
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={serviceName}
        onChange={(e) => setServiceName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button onClick={createNewService}>Add</Button>
    </>
  );
};

export default AddServiceDetails;
