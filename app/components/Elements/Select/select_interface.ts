import { IInputProps } from "./../ElementsInterface";
import { Options } from "react-select";
import { ControllerRenderProps } from "react-hook-form";

export interface IOption {
  label: string;
  value: string | boolean;
}

export interface ISelect extends IInputProps {
  options: Options<IOption>;
  field: ControllerRenderProps<any, any>;
  isMulti: boolean;
  isLoading: boolean;
}
