import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use "Routes" here
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
    <Router>
      {isAppLoading ? (
        <h1>Loading.......</h1>
      ) : (
        <Routes> {/* Use "Routes" instead of "Switch" */}
          {!token || token === null || token === '' ? (
            <>
              {/* Use nested Routes for conditional rendering */}
              {/* {isFirstTimeUse && <Route path="/" element={<WelcomeScreen />} />} */}
              <Route path="/" element={<AuthPage />} />
              <Route path="/signup" element={<AuthPage />} />
            </>
          ) : (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
            </>
          )}
        </Routes>
      )}
    </Router>
  );
};

export default Navigators;
