import styled from 'styled-components';

export const VideoInfoActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
`;

export const VideoInfoActionVideoTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const VideoInfoActionVideoTitleContentContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 70px;
`;

export const VideoInfoActionVideoTitleLabel = styled.label`
  font-size: 26px;
  color: white;
`;

export const VideoInfoActionAddNFTButton = styled.button`
  font-size: 20px;
  text-transform: uppercase;
  color: white;
  background-color: #253E72;
  border: 0;
  border-radius: 25px;
  padding: 8px 24px;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const VideoInfoActionUserInfoActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const VideoInfoActionUserInfoContainer = styled.div`
  display: flex;
  column-gap: 25px;
  align-items: center;
`;

export const VideoInfoActionUserInfoContentContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

export const VideoInfoActionUserNameSubscribersContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const VideoInfoActionUserNameLabel = styled.div`
  font-size: 21px;
  text-transform: capitalize;
  color: white;
`;

export const VideoInfoActionUserSubscribersLabel = styled.div`
  font-size: 14px;
  text-transform: capitalize;
  color: white;
`;

export const VideoInfoActionSupportTipContainer = styled.div`
  display: flex;
  align-items: flex-start;
  column-gap: 20px;
`;

export const VideoInfoActionActionContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const VideoInfoActionLikeDislikeContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const VideoInfoActionShareSaveContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const VideoInfoActionVideoDescriptionContainer = styled.div`
  background-color: #D4F6FC;
  opacity: 0.5;
  border-radius: 21px;
  box-sizing: border-box;
  width: 100%;
  height: 250px;
  margin-top: 10px;
  padding: 14px 16px;
`;
