import axios from "axios"
import {STATUS_CODE} from "../constants/indexs"
import axiosCLient from "./axiosClient"


const cartApis = { 


    add : async (cart) => { 
        try { 
            const response = await axiosCLient.post('/cart' , cart);
            return response;
        }
        catch (error) { 
            console.log(error)
            console.log("Can not connect API !")

        }
    },

    getAll : async() => { 
        try { 
            const response = await axiosCLient.get('/cart')
            return response
        }
        catch(error) { 
            console.log(error)

        }
    },

    edit: async(data) => { 
        try { 
            const response = await axiosCLient.patch('/cart',data)
            return response;
        }
        catch(error){
            console.log(error)
            console.log("Can not connect API !")

        }
    },


    update : async (cart) => {
        if (!cart.id) throw new Error("Missing id in tour Obj")


        try { 
            const response = await axiosCLient.patch(`/tour/${cart.id}`, cart);
            return response
        }

        catch (error) { 
            console.log(error)
            console.log("Can not connect API !")
        }
    },


    delete: async (cartId) => { 
        try { 
            const response = await axiosCLient.delete(`/cart/${cartId}`);
            return response
        }
        catch(error){ 
            console.log(error)
            console.log("Can not connect API !")
        }
    }
}


export default cartApis