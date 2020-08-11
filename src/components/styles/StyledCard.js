import styled from "styled-components";

export const StyledCard = styled.div`
  border: 3px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transform: perspective(1000px) rotateY(var(--rotate-y,0));
  transform-style: preserve-3d; 
  transition: 300ms;
`;