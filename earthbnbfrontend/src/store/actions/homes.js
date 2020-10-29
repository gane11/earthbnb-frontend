import { baseUrl } from "../../config";

export const LOAD = "LOAD";
export const load = (homes) => ({ type: LOAD, homes });

export const getAllHomes = () =>  async (dispatch) => {
  const res = await fetch(`${baseUrl}/homes`)
  
  if(res.ok) {
    const {homes} = await res.json()
    dispatch(load(homes))
  }
  
}