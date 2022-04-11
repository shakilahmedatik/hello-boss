import React from "react";
import { Outlet } from "react-router-dom";
import DefaultLayout from "../../components/DefaultLayout/DefaultLayout";

const Dashboard = () => {
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
};

export default Dashboard;
