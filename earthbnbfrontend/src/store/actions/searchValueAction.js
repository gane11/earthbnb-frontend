import { LOAD_SEARCH } from '../reducers/searchValueReducer';

export const loadSearchValue = (searchValue) => ({ type: LOAD_SEARCH, searchValue })


export const getSearchValue = (searchValue) => async (dispatch) => {

    dispatch(loadSearchValue(searchValue))
}