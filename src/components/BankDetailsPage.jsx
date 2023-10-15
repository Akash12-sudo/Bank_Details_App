import React, { useState } from "react";
import Header from "./Header";
import Form from "./form/Form";
import Footer from "./Footer";

const BankDetailsPage = () => {
  return (
    <div className="md:w-3/4 sm:w-full sm:flex xs:w-full z-2 flex flex-row justify-between">
      <div className="md:w-5/6 sm:w-full xs:w-full flex flex-col px-10">
        <Header />
        <Form />
        <Footer />
      </div>
    </div>
  );
};

export default BankDetailsPage;
