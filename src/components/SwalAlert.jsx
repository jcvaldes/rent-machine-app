import React from "react";

const SwalAlert = ({ showAlert, setShowAlert }) => {
  return (
    <SweetAlert
      show={showAlert}
      title="Demo"
      html
      text="<h1>ssssss</h1>"
      onConfirm={() => setShowAlert(false)}
    />
  );
};

export default SwalAlert;
