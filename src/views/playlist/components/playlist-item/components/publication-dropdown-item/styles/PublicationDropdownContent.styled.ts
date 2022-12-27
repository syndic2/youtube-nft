import styled from 'styled-components';

export const PublicationDropdownContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 12px;
  &:hover {
    cursor: pointer;
  }
`;

export const PublicationDropdownItemContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const PublicationDropdownItemNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
`;

export const PublicationDropdownItemNameLabel = styled.label`
  font-size: 16px;
  color: #040404;
`;

export const PublicationDropdownItemInfoLabel = styled.div`
  font-size: 12px;
  color: #040404;
`;
