import styled from "styled-components";

const StyledFilters = styled.div`
  select {
    background-color: white;
    border: thin solid gray;
    border-radius: 4px;
    display: inline-block;
    font-family: "Roboto-regular", sans-serif;
    line-height: 1.5em;
    padding: 0.5em 3.5em 0.5em 1em;
    width: 200px;
    text-transform: Capitalize;
    font-size: 16px;

    margin: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  & select {
    background-image: linear-gradient(45deg, transparent 50%, gray 50%),
      linear-gradient(135deg, gray 50%, transparent 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;
  }

  & select:focus {
    background-image: linear-gradient(45deg, gray 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, gray 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em,
      calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;
    border-color: black;
    outline: 0;
  }
`;

export default StyledFilters;
