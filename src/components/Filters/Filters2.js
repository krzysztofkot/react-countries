import { useParams, useNavigate } from "react-router-dom";
import StyledFilters from "./Filters.styled";

const Filters = () => {
  const { all, region } = useParams();
  const history = useNavigate();

  const allRegions = ["all", "africa", "americas", "asia", "europe", "oceania"];

  const filterChangeHandler = e => {
    if (e.target.value === all) {
      history(`/${all}`);
    } else {
      history(`/${all}/${e.target.value}`);
    }
  };

  return (
    <StyledFilters>
      <select value={region ? region : all} onChange={filterChangeHandler}>
        {allRegions.map(region => (
          <option value={region} key={region}>
            {region}
          </option>
        ))}
      </select>
    </StyledFilters>
  );
};

export default Filters;
