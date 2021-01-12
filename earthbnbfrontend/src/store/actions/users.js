import { baseUrl } from "../../config";

export const LOAD_USERS = "LOAD_USERS";
export const loadUsers = (users) => ({ type: LOAD_USERS, users });

export const getAllUsers = () => async (dispatch) => {
    const response = await fetch(`${baseUrl}/users`)

    if (response.ok) {
        const { users } = await response.json()
        dispatch(loadUsers(users))
    }

}