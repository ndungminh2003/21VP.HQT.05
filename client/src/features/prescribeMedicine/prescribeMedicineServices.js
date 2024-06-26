import Axios from "../../app/axiosConfig";

const getPrescribeMedicineByRecordId = async (recordId) => {
  try {
    const response = await Axios.get(
      `prescribe-medicine/get-prescribe-medicine/${recordId}`
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
  }
};

const createPrescribeMedicine = async (prescribeMedicine) => {
  const response = await Axios.post(
    "prescribe-medicine/create-prescribe-medicine",
    prescribeMedicine
  );
  return response.data;
};

const prescribeMedicineService = {
  createPrescribeMedicine,
  getPrescribeMedicineByRecordId,
};

export default prescribeMedicineService;
