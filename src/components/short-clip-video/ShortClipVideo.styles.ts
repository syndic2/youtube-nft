import styled from 'styled-components';

export const ShortClipVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const ShortClipVideoTitleContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

export const ShortClipVideoTitleLabel = styled.label`
  font-size: 24px;
  text-transform: capitalize;
  color: white
`;

export const ShortClipVideoVideosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, minmax(auto, 1fr));
  gap: 20px;
  padding-left: 30px;
  padding-right: 30px;
`;
