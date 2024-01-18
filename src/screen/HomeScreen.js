import React, { Fragment } from "react";
import Feed from "../components/Feed/Feed";
import Sidebar from "../components/Sidebar/Sidebar";
import Widgets from "../components/Widget/Widgets";
import { useStateValue } from "../store/StateProvider";

function HomeScreen() {
  const [{ user }] = useStateValue();

  return (
    <Fragment>
      <Sidebar profileSrc={user.photoURL} />
      <Feed />
      <Widgets />
    </Fragment>
  );
}

export default HomeScreen;
