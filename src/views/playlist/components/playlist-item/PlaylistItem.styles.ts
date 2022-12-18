import styled from 'styled-components';

interface PlaylistItemInputTitleProps {
  width: number;
}

export const PlaylistItemContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  background-color: rgb(129, 181, 251, 0.61);
  border-radius: 20px;
  width: 25%;
  height: 100vh;
  padding: 15px;
`;

export const PlaylistItemPreviewContainer = styled.div`
  width: 100%;
`;

export const PlaylistItemPreviewThumbnail = styled.img`
  object-fit: contain;
  border-radius: 17px;
  width: 100%;
`;

export const PlaylistItemTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const PlaylistItemInputTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  column-gap: 15px;
`;

export const PlaylistItemInputTitle = styled.input<PlaylistItemInputTitleProps>`
  background-color: transparent;
  color: white;
  font-size: 16px;
  border: 0;
  width: ${props => props.width}ch;
  &:focus {
    outline: none;
    border-bottom: 1px solid white;
  }
`;
