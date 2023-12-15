import Axios from "../../app/axiosConfig";

const getAllService = async (user) => {
  try{
    const response = await Axios.get(`service/get-all-service`);
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

const getServiceUseByRecordId = async (recordId) => {

  try{
    const response = await Axios.get("service-use/get-service-use",
    { params: { recordId } }
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

const serviceService = {
    getAllService,
    getServiceUseByRecordId,
};

export default serviceService;
