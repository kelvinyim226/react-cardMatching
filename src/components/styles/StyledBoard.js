import styled from "styled-components";

export const StyledBoard = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(30vw / ${(props) => props.width})
  );
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  grid-gap: 10px;
  width: 40%;
  max-width: 35vw;
  margin: auto;
  position: relative;
  margin: 1rem auto;
`;
