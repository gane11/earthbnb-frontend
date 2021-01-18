import { baseUrl } from "../../config";

export const RESERVE_HOME = "RESERVE_HOME"


export const reserve = (data) => async (dispatch) => {
    try{
        const res = await fetch(`${baseUrl}/reservations`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })

        if(res.ok) {
            const {reservation} = await res.json();
            
        }
    } catch (error) {
        console.log(error)
    }
}