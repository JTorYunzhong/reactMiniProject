import { useState } from "react";
export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    (e) => {
      setValues({
        ...values,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      });
    },
  ];
};
