import { forwardRef } from "react";
import { IField } from "../ElementsInterface";
import style from "./Field.module.scss";
import cn from "classnames";

const Field = forwardRef<HTMLInputElement, IField>(
  ({ placeholder, type = "text", errors, ...rest }, ref) => {
    return (
      <div className={style.field}>
        <div className={style.placeholder}>{placeholder}</div>
        <input
          type={type}
          ref={ref}
          {...rest}
          className={cn(style.input, {
            [style.error_input]: errors !== undefined,
          })}
        />
        {errors && <div className={style.error}>{errors.message}</div>}
      </div>
    );
  }
);

Field.displayName = "Field";

export default Field;
