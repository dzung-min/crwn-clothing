import { Outlet } from "react-router-dom";

import NavBar from "../../components/navbar/navbar.component";

const Container = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Container;
