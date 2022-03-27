import { Link, useParams } from "react-router-dom";
import StyledFilters from "./Filters.styled";

const Filters = () => {
  const { all, region } = useParams();

  const allRegions = ["all", "africa", "americas", "asia", "europe", "oceania"];

  if (region) {
    return (
      <StyledFilters>
        <p>{allRegions.filter(currentRegion => region === currentRegion)}</p>
        {allRegions
          .filter(currentRegion => region !== currentRegion)
          .map(filteredRegion => {
            if (filteredRegion === all) {
              return (
                <Link to={`/${all}`} key={all}>
                  {all}
                </Link>
              );
            }
            return (
              <Link to={`/${all}/${filteredRegion}`} key={filteredRegion}>
                {filteredRegion}
              </Link>
            );
          })}
      </StyledFilters>
    );
  } else {
    return (
      <StyledFilters>
        <p>{all}</p>
        {allRegions
          .filter(currentRegion => currentRegion !== all)
          .map(filteredRegion => {
            return (
              <Link to={`/${all}/${filteredRegion}`} key={filteredRegion}>
                {filteredRegion}
              </Link>
            );
          })}
      </StyledFilters>
    );
  }
};

export default Filters;
