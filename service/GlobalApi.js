const CreateNewResume = async (data) => {
  try {
    console.log("Creating new resume with data", data);
    const response = await fetch("http://192.168.10.42:3000/api/user-resumes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data.data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error:", error);
  }
};
// const CreateNewResume = (data) => axiosClient.post("/user-resumes", data);

const GetUserResumes = async (userEmail) => {
  try {
    const response = await fetch(
      `http://192.168.10.42:3000/api/getuserresumes/?email=${userEmail}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.json();
  } catch (error) {
    console.error("Error:", error);
  }
};

const UpdateResumeDetail = async (id, data) => {
  try {
    const response = await fetch(
      `http://192.168.10.42:3000/api/updateresume/?id=${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    return response.json();
  } catch (error) {
    console.error("Error:", error);
  }
};

const GetResumeById = async (id) => {
  try {
    const response = await fetch(
      `http://192.168.10.42:3000/api/getresume/?id=${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.json();
  } catch (error) {
    console.error("Error:", error);
  }
};

const DeleteResumeById = (id) => {
  try {
    const response = fetch(
      `http://192.168.10.42:3000/api/deleteresume/?id=${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.json();
  } catch (error) {
    console.error("Error:", error);
  }
};

export default {
  CreateNewResume,
  GetUserResumes,
  UpdateResumeDetail,
  GetResumeById,
  DeleteResumeById,
};
