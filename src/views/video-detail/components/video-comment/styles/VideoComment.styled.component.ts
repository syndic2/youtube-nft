import styled from 'styled-components';

export const VideoCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
  margin-top: 10px;
`;

export const VideoCommentInputCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const VideoCommentInputCommentContentContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const VideoCommentInput = styled.input`
  font-size: 20px;
  color: white;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid white;
  width: 100%;
  padding-bottom: 5px;
  ::placeholder {
    color: white;
  }
  &:focus {
    outline: none;
  }
`;

export const VideoCommentActionContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  column-gap: 5px;
`;
