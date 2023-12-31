//Custom Hooks -> Funciones (x lo general retornan OBJETOS)
import { useState } from "react";

export function useForm(inputs) {

  const [values, setValues] = useState(inputs);

  const [errors, setErrors] = useState(inputs);

  const handleInputChange = (event) => {
    setValues({
      ...values,[event.target.name]: event.target.value,
    });
  };

  const validateIfValuesHasEmpty = () => {
    const empties = Object.keys(values)
      .filter((value) => !values[value])
      .map((value) => [value, "This field is required"]);

    if (empties.length === 0) {
      setErrors({});
      return;
    }

    setErrors(Object.fromEntries(empties));
  };

  return {
    values,
    errors,
    handleInputChange,
    validateIfValuesHasEmpty,
  };
}