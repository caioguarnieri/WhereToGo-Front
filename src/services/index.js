const signup = async (data) => {
  try {
    const response = await fetch("http://localhost:5000/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, active: true }),
    });

    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const signin = async (data) => {
  try {
    const response = await fetch("http://localhost:5000/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, active: true }),
    });

    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const services = {
  signup,
  signin,
};

export default services;
