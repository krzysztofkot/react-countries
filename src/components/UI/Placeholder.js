import styled from "styled-components";
import { StyledCard } from "./Card";

export const StyledPlaceholder = styled(StyledCard)`
  animation: animate 0.5s infinite alternate linear;

  & section * {
    background-color: #bbb;
  }
  & figure {
    height: 125px;
  }
  & h2 {
    margin-top: 12px;
    height: 3.5rem;
  }
  & section > div + div > ul,
  & section > div,
  & section > div + div {
    background-color: transparent;
  }

  & span {
    display: block;

    margin: 12px 12px 0 12px;
  }

  @keyframes animate {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Placeholder = () => {
  return (
    <StyledPlaceholder>
      <section>
        <div>
          <figure></figure>
          <h2>&nbsp;</h2>
        </div>
        <div>
          <ul>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
          </ul>
          <span>&nbsp;</span>
        </div>
      </section>
    </StyledPlaceholder>
  );
};

export default Placeholder;
