import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

const StyledBreadcrumbs = styled.div`
  text-transform: uppercase;
  margin-bottom: 24px;

  & a,
  a:link,
  a:visited {
    text-decoration: none;
    color: #000;
    margin: 0 3px;
  }
  & span:last-of-type {
    font-family: "Roboto-black", sans-serif;
    margin-left: 3px;
  }
`;

const Breadcrumbs = () => {
  const { all, region, country } = useParams();
  if (!region) {
    return (
      <StyledBreadcrumbs>
        <span>{all}</span>
      </StyledBreadcrumbs>
    );
  }
  if (!country) {
    return (
      <StyledBreadcrumbs>
        <Link to={`/${all}`}>{all}</Link> / <span>{region}</span>
      </StyledBreadcrumbs>
    );
  } else {
    return (
      <StyledBreadcrumbs>
        <Link to={`/${all}`}>{all}</Link> /
        <Link to={`/${all}/${region}`}>{region}</Link> /{" "}
        <span>{country.replace(/-/g, " ")}</span>
      </StyledBreadcrumbs>
    );
  }
};
export default Breadcrumbs;
