import styled from "styled-components";

const StyledOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 24px;
  padding: 0 24px;

  @media (min-width: ${({ theme }) => theme.media.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default StyledOptions;
