import React, { Fragment, useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
// import { Navigate } from 'react-router-dom';
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

  if (isAppLoading) {
    return <h1>Loading.......</h1>;
  }

  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      {/* Conditional rendering for the /dashboard route */}
      <Route
        path="/dashboard"
        element={
          token ? (
            <Dashboard />
          ) : (
            // If the user doesn't have the token, redirect to /signin
            <Navigate to="/signin" />
          )
        }
      />
      <Route path="/signin" element={<AuthPage />} />
    </Routes>
  );
};

export default Navigators;
