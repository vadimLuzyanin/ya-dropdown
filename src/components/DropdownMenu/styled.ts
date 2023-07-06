import { styled } from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px;
  max-width: 260px;
  width: max-content;
  box-sizing: border-box;
  padding: 10px;
`;

export const MenuItemContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;  
  padding: 10px;

  transition: background-color .2s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const MenuItemLabel = styled.div`
  margin-right: 10px;
`;
