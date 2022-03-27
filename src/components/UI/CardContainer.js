import styled from "styled-components";

const StyledCardContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 12px;
`;

const CardContainer = props => {
  return <StyledCardContainer>{props.children}</StyledCardContainer>;
};

export default CardContainer;
