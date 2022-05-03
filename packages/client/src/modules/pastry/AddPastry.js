import React from "react";
import { PastryForm } from "./PastryForm";

export const AddPastry = ({ onClose }) => {
  return (
    <PastryForm
      initialValues={{
        name: "",
        origin: "",
        description: "",
        price: 0,
        categoryId: "",
        imgsrc: "",
      }}
      onClose={onClose}
    />
  );
};