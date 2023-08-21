import { AuthenticationService, StorageService } from "../services";
import UserService from "../services/UserService";

const types = {
  SET_IS_APP_LOADING: 'SET_IS_APP_LOADING',
  SET_TOKEN: 'SET_TOKEN',
  SET_FIRST_TIME_USE: 'SET_FIRST_TIME_USE',
  SET_USER_DATA: 'SET_USER_DATA',
  SET_IS_ADMIN: 'SET_IS_ADMIN'
};

const setIsAppLoading = (isAppLoading) => ({
  type: types.SET_IS_APP_LOADING,
  payload: isAppLoading
});

const setToken = (token) => ({
  type: types.SET_TOKEN,
  payload: token
});

const setIsFirstTimeUse = () => ({
  type: types.SET_FIRST_TIME_USE,
  payload: false
});

const setUserData = (userData) => ({
  type: types.SET_USER_DATA,
  payload: userData
});

const setIsAdmin = (isAdmin) => ({
  type: types.SET_IS_ADMIN,
  payload: isAdmin,
});

const appStart = () => async (dispatch) => {
  dispatch(setIsAppLoading(true));

  // const isFirstTimeUse = await StorageService.getFirstTimeUse();
  // dispatch(setIsFirstTimeUse(!isFirstTimeUse));

  const token = await StorageService.getToken();
  console.log("Get token", token);

  if (token) {
    dispatch(setToken(token));

    try {
      const userResponse = await UserService.getUserData();
      console.log("Get User Data", userResponse);

      if (userResponse?.status) {
        dispatch(setUserData(userResponse.data));
        // if(userResponse?.data?.data?.isAdmin){
        //   dispatch(setIsAdmin(true));
        // }
      } else if (userResponse?.message === 'TokenExpiredError') {
        const tokenResponse = await AuthenticationService.refreshToken();

        if (tokenResponse?.status) {
          dispatch(setToken(tokenResponse.data));

          const refreshedUserResponse = await UserService.getUserData();
          if (refreshedUserResponse?.status) {
            dispatch(setUserData(refreshedUserResponse.data));
          }
        } else {
          dispatch(setToken(''));
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  dispatch(setIsAppLoading(false));
};

export default { setIsAppLoading, setToken, types, appStart, setIsFirstTimeUse,setIsAdmin };
