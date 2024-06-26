import { StringifyOptions } from "querystring";
import api from "./api";

interface UserParams{
    firstName: string;
    lastName:string;
    phone: string;
    email:string;
    created_at:string;
}

interface Passwordparams {
    currentPassword: string;
    newPassword: string;
}

const profileService = {
  fetchCurrent: async () => {
    const token = sessionStorage.getItem("onebitflix-token");

    const res = await api.get("/users/current", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    .catch((error)=>{
        return error.message;
    });

    return res.data;
  },
  userUpdate: async (params: UserParams) => {
    const token = sessionStorage.getItem("onebitflix-token");

    const res = await api.put("/users/current", params, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    .catch((error)=>{

        if(error.response.status === 400 || error.response.status === 401){
            return error.response;
        }

        return error.message;
    });

    return res.status;
  },

  passwordUpdate: async (params: Passwordparams) => {
    const token = sessionStorage.getItem("onebitflix-token");

    const res = await api.put("/users/current/password", params, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    .catch((error)=>{

        if(error.response.status === 400 || error.response.status === 401){
            return error.response;
        }

        return error.message;
    });

    return res.status;
  } 
}

export default profileService