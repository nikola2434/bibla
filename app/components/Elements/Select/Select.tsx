import { FC } from "react";
import style from "./Select.module.scss";
import { IOption, ISelect } from "./select_interface";
import { OnChangeValue } from "react-select";
import ReactSelect from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const Select: FC<ISelect> = ({
  errors,
  placeholder,
  options,
  field,
  isLoading,
  isMulti,
}) => {
  const onChange = (newValue: unknown | OnChangeValue<IOption, boolean>) => {
    field.onChange(
      isMulti
        ? (newValue as IOption[]).map((item) => item.value)
        : (newValue as IOption).value
    );
  };
  const getValues = () => {
    if (field.value) {
      return isMulti
        ? options.filter((item) => field.value.indexOf(item.value) >= 0)
        : options.find((item) => item?.value === field.value);
    } else return isMulti ? [] : "";
  };
  return (
    <div className={style.select}>
      <div className={style.placeholder}>{placeholder}</div>
      <div className={style.react_select}>
        <ReactSelect
          placeholder={placeholder}
          classNamePrefix="custom-select"
          onChange={onChange}
          value={getValues()}
          //   components={animatedComponents}
          isLoading={isLoading}
          options={options}
          isMulti={isMulti}
        />
        {errors && <div className={style.error}>{errors.message}</div>}
      </div>
    </div>
  );
};

export default Select;
