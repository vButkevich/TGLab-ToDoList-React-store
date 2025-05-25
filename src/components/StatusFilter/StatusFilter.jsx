import { Button } from "../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { setStatusFilter } from "../../redux/filtersSlice";
import css from "./StatusFilter.module.css";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.status);

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <section className={css.section}>
      <h2 className={css.title}>Filter by status</h2>

      <div className={css.wrapper}>
        <Button
          selected={filter === "all"}
          onClick={() => handleFilterChange("all")}
        >
          All
        </Button>
        <Button
          selected={filter === "active"}
          onClick={() => handleFilterChange("active")}
        >
          Active
        </Button>
        <Button
          selected={filter === "completed"}
          onClick={() => handleFilterChange("completed")}
        >
          Completed
        </Button>
      </div>
    </section>
  );
};
