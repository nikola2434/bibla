import { FC } from "react";
import { FormState, UseFormRegister } from "react-hook-form";
import Field from "../../Elements/Field/Field";
import { IForm } from "../Auth";

export interface IFieldsProps {
  formState: FormState<IForm>;
  register: UseFormRegister<any>;
}

const Fields: FC<IFieldsProps> = ({ formState: { errors }, register }) => {
  return (
    <>
      <Field
        placeholder="Email"
        errors={errors.login}
        {...register("login", {
          required: "This field must be filled",
          pattern: {
            value: /.+@.+\..+/i,
            message: "Please, enter correct email",
          },
        })}
      />

      <Field
        placeholder="Password"
        type={"password"}
        errors={errors.password}
        {...register("password", {
          required: "This field must be filled",
          minLength: {
            value: 5,
            message: "Password must be more than 5 characters",
          },
        })}
      />
    </>
  );
};

export default Fields;
