import React, { useEffect, Suspense } from "react";
import { Route, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getMe, updateIsFirstAccess } from "store/other/authSlice";

import { ROUTES } from "routes/constants";

import Loading from "components/Loading";

import webStorage from "utils/webStorage";
import Layout from "components/Layout";
import FirstLogin from "../containers/OtherPage/FirstLogin";

// eslint-disable-next-line react/prop-types
const AdminRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const isFirstAccess = useSelector((state) => state.authReducer.isFirstAccess);
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const currentUser = useSelector((state) => state.authReducer.currentUser);

  useEffect(() => {
    if (isFirstAccess) {
      const accessToken = webStorage.getToken();
      if (accessToken) {
        dispatch(getMe());
      } else {
        dispatch(updateIsFirstAccess());
      }
    }
  }, [dispatch, isFirstAccess]);

  useEffect(() => {
    if (!isAuth && !isFirstAccess) history.push(ROUTES.LOGIN);
  }, [isAuth, isFirstAccess, history, currentUser]);

  if (currentUser.ischangepass === 0) {
    return <FirstLogin />;
  }
  if (isFirstAccess) return <Loading />;

  return (
    <Route {...rest}>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Component />
        </Suspense>
      </Layout>
    </Route>
  );
};
export default AdminRoute;
