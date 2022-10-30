import { FC } from "react";
import { FormState, UseFormRegister } from "react-hook-form";
import Field from "../../Elements/Field/Field";
import { IChangePassword } from "./UserProfileInterface";

interface IFieldsUserProps {
  formState: FormState<IChangePassword>;
  register: UseFormRegister<any>;
}

const FieldsUser: FC<IFieldsUserProps> = ({
  register,
  formState: { errors },
}) => {
  return (
    <div>
      <Field
        placeholder="login"
        {...register("login", {
          required: "This field must be filled",
          pattern: {
            value: /.+@.+\..+/i,
            message: "Please, enter correct email",
          },
        })}
        errors={errors.login}
      />
    </div>
  );
};

export default FieldsUser;
