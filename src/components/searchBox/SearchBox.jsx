import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeFilter, selectNameFilter  } from "../../redux/filtersSlice";

import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(changeFilter(value));
  };

  return (
    <section>
      <span>Find contacts by name</span>
      <br />
      <input
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={handleChange}
      />
    </section>
  );
};

export default SearchBox;