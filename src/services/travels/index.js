const list = async () => {
  try {
    const response = await fetch("https://drab-red-rhinoceros-tutu.cyclic.app/travels", {
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
    const response = await fetch(`https://drab-red-rhinoceros-tutu.cyclic.app/travels/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const create = async (data) => {
  try {
    const response = await fetch("https://drab-red-rhinoceros-tutu.cyclic.app/travels", {
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
    const response = await fetch(`https://drab-red-rhinoceros-tutu.cyclic.app/travels/${id}`, {
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
    const response = await fetch(`https://drab-red-rhinoceros-tutu.cyclic.app/travels/${id}`, {
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
