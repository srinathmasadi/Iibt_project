import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use "Routes" here
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { GeneralAction } from '../actions';

import { AuthPage, Dashboard } from '../Screens';

const Navigators = () => {
  const { isAppLoading, token, isFirstTimeUse } = useSelector(
    state => state.generalState
  );


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GeneralAction.appStart());
  }, []);

  return (
    <Routes>
      {token ? (
        <>
          {/* If the token is present, redirect from "/" to "/dashboard" */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signin" element={<AuthPage />} />
        </>
      ) : (
        <>
          {/* If the token is not present, redirect from "/" to "/signin" */}
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="/signin" element={<AuthPage />} />
          <Route path="/signup" element={<AuthPage />} />
        </>
      )}
    </Routes>
  );
};

export default Navigators;
