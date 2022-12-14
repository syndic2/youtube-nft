import styled from 'styled-components';

export const UploadVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  background-color: #7DB0EA;
  width: 60%;
  margin: auto;
  padding: 30px;
`;

export const UploadVideoUploadVideoFileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`;

export const UploadVideoVideoFileTitleLabel = styled.label`
  font-size: 40px;
  font-weight: 500;
  text-transform: capitalize;
  color: white;
`;

export const UploadVideoVideoDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const UploadVideoVideoDescriptionTitle = styled.label`
  font-size: 40px;
  text-transform: capitalize;
  color: white;
`;

export const UploadVideoVideoTitleInput = styled.input`
  font-size: 16px;
  color: white;
  background-color: transparent;
  border: 2px solid #C7FFD1;
  border-radius: 10px;
  outline: none;
  padding: 10px 12px;
  ::placeholder {
    color: white;
  }
`;

export const UploadVideoVideoDescriptionInput = styled.textarea`
  font-size: 16px;
  color: white;
  background-color: transparent;
  border: 2px solid #C7FFD1;
  border-radius: 10px;
  outline: none;
  resize: none;
  padding: 10px 12px;
  ::placeholder {
    color: white;
  }
`;

export const UploadVideoVideoThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const UploadVideoVideoThumbnailTitleLabel = styled.label`
  font-size: 40px;
  color: white;
`;

export const UploadVideoVideoThumbnailContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  column-gap: 20px;
`;

export const UploadVideoVideoThumbnailImgContainer = styled.div`
  background-color: #2D2D2D;
  border-radius: 24px;
  width: 273px;
  height: 178px;
  padding: 15px 20px;
`;

export const UploadVideoVideoThumbnailImg = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

export const UploadVideoVideoThumbnailImgUploadContainer = styled.div`
  flex: 1;
  display: flex;
  column-gap: 5px;
  align-items: flex-start;
`;

export const UploadVideoVideoThumbnailImgNameContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const UploadVideoVideoThumbnailImgNameLabel = styled.label`
  font-size: 20px;
  color: white;
  background-color: transparent;
  border: 2px solid #C7FFD1;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 5px 8px;
`;

export const UploadVideoVideoThumbnailImgInfoLabel = styled.label`
  font-size: 15px;
  color: white;
`;

export const UploadVideoVideoGenreContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  margin-top: 25px;
`;

export const UploadVideoVideoGenreTitleLabel = styled.label`
  font-size: 40px;
  color: white;
`;

export const UploadVideoSelectedGenreContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 10px;
`;

export const UploadVideoSelectedGenreTitleLabel = styled.label`
  font-size: 18px;
  color: white;
`;

export const UploadVideoSelectedGenreItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  border: 1px solid #C7FFD1;
  border-radius: 10px;
  width: fit-content;
  padding: 10px;
`;

export const UploadVideoEmptySelectedGenreItemLabel = styled.label`
  font-size: 16px;
  color: white;
  opacity: 0.5px;
`;

export const UploadVideoSelectGenreContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const UploadVideoSelectGenreTitleLabel = styled.label`
  font-size: 18px;
  color: white;
`;

export const UploadVideoSelectGenreItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`;

export const UploadVideoSelectGenreInfoLabel = styled.label`
  font-size: 16px;
  color: white;
  opacity: 0.5;
`;
