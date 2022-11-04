import { ControllerRenderProps } from "react-hook-form";
import { Options } from "react-select";
import { IInputProps } from "./../ElementsInterface";
import { TypeMaterialIcons } from "./../../../../shared/types/icons";
export interface IOptionIcons {
  label: any;
  value: TypeMaterialIcons;
}

export interface ISelectIcons extends IInputProps {
  options: Options<IOptionIcons>;
  field: ControllerRenderProps<any, any>;
}
