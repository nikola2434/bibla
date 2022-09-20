import { FC } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import Field from "../Field/Field";
import style from "./FieldLink.module.scss";

interface IFieldLink {
  errors?: FieldError;
  register: UseFormRegister<any>;
  generateLink: () => void;
}

export const FieldLink: FC<IFieldLink> = ({
  errors,
  register,
  generateLink,
}) => {
  return (
    <div className={style.fieldLink}>
      <Field
        placeholder="Genre link"
        errors={errors}
        {...register("link", { required: "This field must be filled!" })}
      />
      <div onClick={generateLink} className={style.button}>
        Generate
      </div>
    </div>
  );
};
