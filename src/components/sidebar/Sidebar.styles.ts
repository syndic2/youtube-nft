import styled from 'styled-components';

interface SidebarMenuContainerProps {
  isSelected: boolean;
}

export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
	background-color: #537CB8;
  opacity: 0.75;
  overflow-x: hidden;
  overflow-y: auto;
  width: auto;
  height: 100%;
`;

export const SidebarMenuContainer = styled.div<SidebarMenuContainerProps>`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 15px 20px;
  &:hover {
    cursor: pointer;
  }
  ${props => props.isSelected && `
    background-color: rgb(201, 234, 255, 0.5);
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
  `}
`;

export const SidebarMenuLabel = styled.div`
  font-size: 14px;
  text-align: center;
  color: white;
`;
