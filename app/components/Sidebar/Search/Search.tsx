import { FC } from "react";
import style from "./Search.module.scss";
import { useSearch } from "./useSearch";
import { InputSearch } from "../../InputSearch/InputSearch";
import { SearchList } from "./SearchList/SearchList";

export const Search: FC = () => {
  const { data, handleSearch, isSuccess, searchTerm } = useSearch();
  return (
    <div className={style.search}>
      <InputSearch value={searchTerm} handleSearch={handleSearch} />
      {isSuccess && <SearchList books={data || []} />}
    </div>
  );
};
