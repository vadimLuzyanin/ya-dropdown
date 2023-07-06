import { styled } from "styled-components";

export const Trigger = styled.div<{ $isOpen: boolean }>`
  cursor: pointer;
  background-color: ${(props) => (props.$isOpen ? "#d3d3d3" : "#fff")};
  border-radius: 5px;
  transition: background-color 0.2s ease;
  box-sizing: border-box;
  padding: 5px;

  &:hover {
    background-color: #d3d3d3;
  }
`;
