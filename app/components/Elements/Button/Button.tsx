import { FC } from "react";
import { IButton } from "../ElementsInterface";
import style from "./Button.module.scss";
import cn from "classnames";

const Button: FC<IButton> = ({ children, buttonStyle, ...rest }) => {
  return (
    <button
      {...rest}
      className={cn(style.button, {
        [style.button_style_1]: buttonStyle === 1,
        [style.button_style_2]: buttonStyle === 2,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
