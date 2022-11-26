import styled from 'styled-components';

export const ShortClipContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const ShortClipTitleContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

export const ShortClipTitleLabel = styled.label`
  font-size: 24px;
  text-transform: capitalize;
  color: white
`;

export const ShortClipVideosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, minmax(auto, 1fr));
  gap: 20px;
  padding-left: 30px;
  padding-right: 30px;
`;
