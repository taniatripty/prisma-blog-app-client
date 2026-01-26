import { env } from "@/env";
import { error } from "console";

const API_URL=env.API_URL

export const blogServices={
    getBlog:async function(){

        try {
           
            const res=await fetch(`${API_URL}/posts`,{next:{revalidate:10}})
            const data=await res.json();
            return{
                data:data, error:null
            }
            
        } catch (err) {
        console.error(err)
        return{ data:null, error:{message:'something went wrong'}}
        
    }
    }

}