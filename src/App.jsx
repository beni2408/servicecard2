import React, { useEffect, useState } from "react";
import "./App.css";
import { REST_HOST_NAME, SERVICE_ENDPOINT } from "./backend";
import { Route, Routes } from "react-router-dom";
import Services from "./Pages/Services";
import ServiceDetails from "./Pages/ServiceDetails";
import AddServiceDetails from "./Pages/AddServiceDetails";
import EditServiceDetails from "./Pages/EditServiceDetails";

function App() {
  const [serviceDetails, setServiceDetails] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch(`${REST_HOST_NAME}/${SERVICE_ENDPOINT}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((serviceData) => setServiceDetails(serviceData))
      .catch((err) => setError(err));
  }, []);

  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<Services serviceDetails={serviceDetails} error={error} />}
        />
        <Route path="/services/add" element={<AddServiceDetails />} />
        <Route path="/services/edit/:id" element={<EditServiceDetails />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/nopage" element={<h1>No Page</h1>} />
      </Routes>
    </>
  );
}

export default App;
