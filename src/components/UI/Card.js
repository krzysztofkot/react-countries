import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { GiCapitol, GiFlatPlatform } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";

export const StyledCard = styled.div`
  border-radius: 10px;
  border: 2px solid #ddd;
  width: 250px;
  height: 375px;
  margin: 12px;
  padding: 12px;

  & > section {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
  }

  & img {
    border: 1px solid #000;
    height: 125px;
    width: 100%;
  }

  & h2 {
    text-align: center;
    font-size: 22px;
  }

  svg {
    font-size: 20px;
    margin-right: 12px;
  }

  & ul {
    list-style: none;
  }
  & li {
    margin: 6px 12px;
    display: flex;
    align-items: center;
  }

  a,
  a:link,
  a:visited {
    display: block;
    color: #000;
    text-decoration: none;
    margin-top: 18px;
    text-align: center;
  }
`;

const Card = ({
  url,
  country,
  capital,
  area,
  population,
  region,
  commonName,
}) => {
  const { all } = useParams();

  let capitalCity;
  if (Array.isArray(capital)) {
    capitalCity = capital.join(", ");
  } else {
    capitalCity = capital;
  }

  return (
    <StyledCard>
      <section>
        <figure>
          <img src={url} alt={`Flag of ${country}`} />
          <figcaption>
            <h2>{country}</h2>
          </figcaption>
        </figure>
        <div>
          <ul>
            <li>
              <GiCapitol />
              <p>{capital !== undefined ? capitalCity : "No capital"}</p>
            </li>
            <li>
              <IoIosPeople />
              <p>
                {population !== undefined
                  ? population.toLocaleString("en-US")
                  : "No data"}
              </p>
            </li>
            <li>
              <GiFlatPlatform />
              <p>
                {area !== undefined ? area.toLocaleString("en-US") : "No data"}
              </p>
            </li>
          </ul>
          <Link
            to={`/${all}/${region.toLowerCase()}/${commonName
              .replace(/ /g, "-")
              .toLowerCase()}`}
          >
            More details...
          </Link>
        </div>
      </section>
    </StyledCard>
  );
};

export default Card;
