import styled from "styled-components";

export const Input = styled.input`
  font-family: "Montserrat Regular", cursive;
  font-size: 30px;
  color: var(--darkblue);
  background-color: var(--white);
  border: solid 4px var(--darkblue);
  width: 266px;
  height: 45px;
  padding-left: 10px;

  @media (min-width: 1069px) {
    width: 356px;
  }
`;

export const InputResponsive = styled.input`
  position: fixed;
  width: 100%;
  height: 0px;
  transition: all 0.5s;
  padding: 0 0 0 10px;
  background-color: var(--whiteblue);
  opacity: 95%;
  border: none;
  text-align: left;
  font-size: 30px;
  font-family: "Montserrat Regular", cursive;
  color: var(--white);

  @media (min-width: 769px) {
    display: none;
  }
`;

export const TextArea = styled.textarea`
  background-color: var(--white);
  border: solid 4px var(--darkblue);
  font-family: "Montserrat Regular", cursive;
  font-size: 18px;
  color: var(--darkblue);
  width: 266px;
  height: 160px;

  @media (min-width: 1069px) {
    width: 356px;
  }
`;
