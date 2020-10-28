import { baseUrl } from "../../config";
// import{hideForm} from "./ui"

export const TOKEN_KEY = "TOKEN_KEY";
export const SET_TOKEN = "SET_TOKEN";
export const REMOVE_TOKEN = "REMOVE_TOKEN";

export const removeToken = (token) => ({ type: REMOVE_TOKEN });
export const setToken = (token) => ({ type: SET_TOKEN, token });

export const loadToken = () => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN_KEY);
  if (token) {
    dispatch(setToken(token));
  }
};

export const login = (email, password) => async (dispatch) => {
  console.log(baseUrl);
  const response = await fetch(`${baseUrl}/session`, {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const { token } = await response.json();
    window.localStorage.setItem(TOKEN_KEY, token);
    dispatch(setToken(token));
  }
};

export const logout = () => async (dispatch, getState) => {
  const {
    authentication: { token },
  } = getState();
  const response = await fetch(`${baseUrl}/users`, {
    method: "delete",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (response.ok) {
    window.localStorage.removeItem(TOKEN_KEY);
    dispatch(removeToken());
  }
};

//sign-up

export const createUser = (data) => async (dispatch) => {
  try{
  const response = await fetch(`${baseUrl}/users`, {
    method:"POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  })

  if(response.ok) {
    const { token } = await response.json();
    window.localStorage.setItem(TOKEN_KEY, token);
    dispatch(setToken(token));
  }

} catch (error) {
  console.log(error)
}
}