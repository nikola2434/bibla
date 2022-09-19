import { ChangeEvent, FC } from "react";
import { Icons } from "../../UI/Icons";
import style from "./InputSearch.module.scss";

interface IInputSearch {
  value: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputSearch: FC<IInputSearch> = ({ value, handleSearch }) => {
  return (
    <div tabIndex={0} className={style.search}>
      <Icons name="MdSearch" />
      <input
        type="text"
        value={value}
        onChange={handleSearch}
        placeholder="Search"
      />
    </div>
  );
};
