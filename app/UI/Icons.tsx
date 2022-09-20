import { FC } from "react";
import { TypeMaterialIcons } from "../../shared/types/icons";
import * as MaterialIcons from "react-icons/md";

export const Icons: FC<{ name: TypeMaterialIcons }> = ({ name }) => {
  const Icon = MaterialIcons[name];
  return <Icon />;
};
