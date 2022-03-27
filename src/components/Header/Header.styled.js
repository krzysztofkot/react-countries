import styled from "styled-components";

export const StyledHeader = styled.header`
  position: relative;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  & a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    margin-right: auto;
  }
  & h1 {
    margin: 0 12px;
    font-family: "Lobster";
    font-size: 42px;
  }
`;

export const StyledNav = styled.nav`
  & {
    display: flex;
    align-items: center;
  }
  & input[type="checkbox"]:checked + label {
    background-color: rgba(0, 0, 0, 0);
    transform: rotate(90deg);
  }

  & input[type="checkbox"]:checked + label::after {
    transform: rotate(45deg);
  }
  & input[type="checkbox"]:checked + label::before {
    transform: rotate(-45deg);
  }

  & label {
    position: relative;
    background-color: #000;
    width: 36px;
    height: 2px;
    border: none;
    transform: translateY(50%);
    z-index: 3;
    transition: all 0.3s;
    cursor: pointer;

    @media (min-width: ${({ theme }) => theme.media.tablet}) {
      display: none;
    }
  }

  & label::after,
  & label::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #000;
    left: 0;
  }
  & label::after {
    transform: translateY(-12px);
  }
  & label::before {
    transform: translateY(12px);
  }
  & input[type="checkbox"] {
    display: none;
  }

  & input[type="checkbox"]:checked + label + ul {
    transform: translateY(0);
  }

  & ul {
    position: absolute;
    list-style: none;
    transform: translateY(-100%);
    background-color: #fff;
    top: 0;
    left: 0;
    width: 100%;
    transition: transform 0.3s linear;

    @media (min-width: ${({ theme }) => theme.media.tablet}) {
      transform: translateY(0);
      position: static;
      display: flex;
      transition: none;
    }

    & li {
      margin: 0 auto;
      text-align: center;
    }
  }
  & a {
    padding: 10px 20px;
    display: block;
    text-transform: uppercase;
  }

  .active {
    font-family: "Roboto-black", sans-serif;
  }
`;
