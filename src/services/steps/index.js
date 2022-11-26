const list = async () => {
  try {
    const response = await fetch("http://localhost:5000/steps", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const show = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/steps/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const create = async (data) => {
  try {
    const response = await fetch("http://localhost:5000/steps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const update = async (data, id) => {
  try {
    const response = await fetch(`http://localhost:5000/steps/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const destroy = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/steps/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    await response.json();
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const services = {
  list,
  show,
  create,
  update,
  destroy,
};

export default services;
