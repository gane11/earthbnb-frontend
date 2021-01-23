import { baseUrl } from "../../config";

export const RESERVE_HOME = "RESERVE_HOME"


export const reserve = (reservation) => async (dispatch) => {
    try{
        const res = await fetch(`${baseUrl}/reservations`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json' },
            body: JSON.stringify(reservation)
        })

        if(res.ok) {
            const data = await res.json();
            dispatch({
                type: RESERVE_HOME,
                
            })
            
        }
    } catch (error) {
        console.log(error)
    }
}
