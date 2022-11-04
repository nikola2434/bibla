import React, { FC } from "react";
import { OnChangeValue } from "react-select";
import { IOptionIcons, ISelectIcons } from "./SelectIcons.interface";
import style from "./SelectIcons.module.scss";
import ReactSelect from "react-select";

export const SelectIcons: FC<ISelectIcons> = ({
  field,
  options,
  placeholder,
  errors,
}) => {
  const onChange = (
    newValue: unknown | OnChangeValue<IOptionIcons, boolean>
  ) => {
    field.onChange((newValue as IOptionIcons).value);
  };

  const getValues = () => {
    if (field.value) {
      return options.find((item) => item.value === field.value);
    } else return "";
  };

  return (
    <div className={style.select_icons}>
      <div className={style.placeholder}>{placeholder}</div>
      <div className={style.select}>
        <ReactSelect
          onChange={onChange}
          options={options}
          value={getValues()}
          placeholder={placeholder}
          classNamePrefix="custom-select"
        />
        {errors && <div className={style.error}>{errors.message}</div>}
      </div>
    </div>
  );
};
