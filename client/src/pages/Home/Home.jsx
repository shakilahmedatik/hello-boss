import React from "react";
import DefaultLayout from "../../components/DefaultLayout/DefaultLayout";

const Home = () => {
  return (
    <DefaultLayout>
      <div className="flex justify-center items-center">
        <h1 className="text-red-600 text-4xl">Welcome Home</h1>
      </div>
    </DefaultLayout>
  );
};

export default Home;
