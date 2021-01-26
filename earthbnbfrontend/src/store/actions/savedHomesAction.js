import { baseUrl } from "../../config";

export const LOAD_SAVED = "LOAD_SAVED";
export const DELETE_SAVED = "DELETE_SAVED"

export const loadSavedHomes = (savedHomes) => ({ type: LOAD_SAVED, savedHomes })


export const getSavedHomes = (id) => async (dispatch) => {
    const response = await fetch(`${baseUrl}/users/${id}/reservations`)

    if (response.ok) {
        const { savedHomes } = await response.json()
        console.log(savedHomes, '!!!!!!!!!!!!!')
        dispatch(loadSavedHomes(savedHomes))
    }

}

export const deleteSavedHome = (id) => {
    return async (dispatch) => {
        try {
            const res = await fetch(`${baseUrl}/reservations/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            if (res.ok) {
                const data = await res.json()
                return dispatch({
                    type: DELETE_SAVED,
                    id: data.id
                })
            }
        } catch (e) {
            console.log(e)
        }
    }
}