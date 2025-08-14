import { REST_HOST_NAME, SERVICE_ENDPOINT } from "../backend";

async function getAllServices() {
  let response = await fetch(`${REST_HOST_NAME}/${SERVICE_ENDPOINT}`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  let data = await response.json();
  return data;
}

async function getServiceByID(id) {
  try {
    let response = await fetch(`${REST_HOST_NAME}/${SERVICE_ENDPOINT}/${id}`, {
      method: "GET",
    });
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function addNewService(payload) {
  try {
    let response = await fetch(`${REST_HOST_NAME}/${SERVICE_ENDPOINT}`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export { getAllServices, getServiceByID, addNewService };
