import {
  GET_USER_PROFILE_START,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE,
  UPDATE_USER_PROFILE_START,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_FAILURE,
} from "../actionTypes/setting";

const initialState = {
  loading: false,
  user: null,
  error: null,
};

const settingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PROFILE_START:
    case UPDATE_USER_PROFILE_START:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_PROFILE_SUCCESS:
    case UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case GET_USER_PROFILE_FAILURE:
    case UPDATE_USER_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default settingReducer;