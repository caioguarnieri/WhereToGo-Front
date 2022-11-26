const signup = async (data) => {
  try {
    const response = await fetch("https://drab-red-rhinoceros-tutu.cyclic.app/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, active: true }),
    });

    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
  
    return false;
  }
};

const signin = async (data) => {
  try {
    const response = await fetch("https://drab-red-rhinoceros-tutu.cyclic.app/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, active: true }),
    });

    const responseJson = await response.json();
    
    return responseJson;
  } catch (error) {
    
    return false;
  }
};

const services = {
  signup,
  signin,
};

export default services;
