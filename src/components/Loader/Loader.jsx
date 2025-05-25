import { useSelector } from "react-redux";
import { Circles } from "react-loader-spinner";
import css from "./Loader.module.css";

export const Loader = () => {
  const isLoading = useSelector((state) => state.tasks.isLoading);
  const error = useSelector((state) => state.tasks.error);

  return (
    <div>
      {isLoading && !error && (
        <Circles
          width="60"
          height="60"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{ display: "flex", justifyContent: "center" }}
          wrapperClass={css.isLoading}
          visible={true}
        />
      )}
    </div>
  );
};
