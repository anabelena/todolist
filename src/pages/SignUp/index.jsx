import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../../slices/userSlice";

import { Card, Form } from "../../components";
import { inputs } from "./form";
import { create } from "../../services";

export default function SignUp() {

  const {values,errors,handleInputChange,validateIfValuesHasEmpty} = useForm({
      name: "",
      lastname: "",
      email: "",
      password: "",
    });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    validateIfValuesHasEmpty();
    const user = await create(values,"users");
    dispatch(saveUser(user)); //guarda usuario
    navigate("/"); //vuelve al home
  };

  return (
    <div className="h-screen flex items-center justify-center max-w-md mx-auto">
      <Card>
        <h1 className="text-2xl font-semibold my-5">Crear Cuenta</h1>
        <Form
          inputs={inputs}
          errors={errors}
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          textButton= "Sign up"
          values={values}
        />
      </Card>
    </div>
  );
}