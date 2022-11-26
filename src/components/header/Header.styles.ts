import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 50px;
  background-color: #537CB8;
  padding: 20px;
`;

export const HeaderSideMenuIconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3D5994;
  border: none;
  border-radius: 50%;
  padding: 12px;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const HeaderSideMenuIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const HeaderContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  width: 100%;
`;

export const HeaderContentTitleContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const HeaderContentTitleLogo = styled.img`
  width: 50px;
  height: 50px;
`;

export const HeaderContentTitleLabel = styled.label`
  font-size: 32px;
  text-transform: uppercase;
  color: white;
`;

export const HeaderContentMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 24px;
  width: 100%;
`;

export const HeaderContentMenuSearchBoxContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  width: 60%;
`;

export const HeaderContentMenuSearchInput = styled.input`
  border: none;
  border-radius: 7px;
  width: 100%;
  padding: 8px 12px;
  &:focus {
    outline: none;
  }
`;

export const HeaderContentMenuUploadVideoContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const HeaderContentLoginRegisterContainer = styled.div`
  justify-self: right;
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const HeaderContentLoginLoginLink = styled.a`
  font-size: 14px;
  text-decoration: none;
  color: #FBEBEB;
`;

export const HeaderContentRegisterButton = styled.button`
  background-color: #41597E;
  color: white;
  border: none;
  border-radius: 7px;
  padding: 12px 14px;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;
