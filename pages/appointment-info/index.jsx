import React, { useState } from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import Layout from "@/layouts/MainLayout";

const AppointmentInfo = () => {
  const [page, setPage] = useState(1);

  return (
    <Layout>
      {page === 1 ? (
        <FirstPage setPage={setPage} />
      ) : (
        <SecondPage setPage={setPage} />
      )}
    </Layout>
  );
};

export default AppointmentInfo;
