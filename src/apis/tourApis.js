import axios from "axios"
import {STATUS_CODE} from "../constants/indexs"
import axiosCLient from "./axiosClient"


const tourApis = { 


    add : async (tour) => { 
        try { 
            const response = await axiosCLient.post('/tour' , tour);
            return response;
        }
        catch (error) { 
            console.log(error)
            console.log("Can not connect API !")

        }
    },

    getAll : async() => { 
        try { 
            const response = await axiosCLient.get('/tour')
            return response
        }
        catch(error) { 
            console.log(error)

        }
    },

    edit: async(data) => { 
        try { 
            const response = await axiosCLient.patch('/tour',data)
            return response;
        }
        catch(error){
            console.log(error)
            console.log("Can not connect API !")

        }
    },


    update : async (tour) => {
        if (!tour.id) throw new Error("Missing id in tour Obj")
        try { 
            const response = await axiosCLient.patch(`/tour/${tour.id}`, tour);
            return response
        }
        catch (error) { 
            console.log(error)
            console.log("Can not connect API !")
        }
    },


    delete: async (tourId) => { 
        try { 
            const response = await axiosCLient.delete(`/tour/${tourId}`);
            return response
        }
        catch(error){ 
            console.log(error)
            console.log("Can not connect API !")
        }
    }
}


export default tourApis