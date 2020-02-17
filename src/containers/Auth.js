import React, { useEffect, useContext } from "react";

import { AuthContext } from "../contexts/AuthStore";

const Auth = () => {
  const { state: authState, dispatch } = useContext(AuthContext);

  useEffect(() => {
    dispatch({
      type: "INIT_AUTH",
      username: "재키"
    });
  }, [dispatch]);

  return <>{authState.username}님 안녕하세요</>;
};

export default Auth;
