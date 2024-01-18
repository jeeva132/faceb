import { Button, LinearProgress } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import {
  auth,
  getRedirectResult,
  provider,
  signInWithRedirect,
} from "../../firebase";
import { actionTypes } from "../../store/reducer";
import { useStateValue } from "../../store/StateProvider";
import "./login.scss";

function Login() {
  // eslint-disable-next-line
  const [_, dispatch] = useStateValue();
  const [showLoader, setLoader] = useState(true);

  const setUser = useCallback(async () => {
    const result = await getRedirectResult(auth);

    if (result != null) {
      dispatch({ type: actionTypes.SET_USER, user: result.user });
    }
    setLoader(false);
  }, [dispatch]);

  useEffect(() => {
    setUser();
  }, [setUser]);

  const onSignIn = async () => {
    await signInWithRedirect(auth, provider);
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png"
          alt="Facebook logo"
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt="facebook logo name"
        />
      </div>
      {showLoader ? (
        <div style={{ width: "10%" }}>
          <LinearProgress />
        </div>
      ) : (
        <Button onClick={onSignIn}>Sign In</Button>
      )}
    </div>
  );
}

export default Login;
