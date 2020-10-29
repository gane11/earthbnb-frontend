import { baseUrl } from "../../config";

export const SET_CURRENT = "SET_CURRENT";

export const setCurrent = (current) => ({type: SET_CURRENT, current});

export const getOneHome = (id) => async (dispatch) => {
  const response = await fetch(`${baseUrl}/homes/${id}`)

  if(response.ok) {
    const current = await response.json();
    dispatch(setCurrent(current))
  }
}
