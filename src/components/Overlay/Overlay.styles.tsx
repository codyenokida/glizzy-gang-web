import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgb(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledWalletProviderList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.875rem;
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 1rem;
  height: 4.5rem;
  cursor: pointer;

  &:hover,
  &:focus {
    outline: 0;
    border-color: gray;
  }

  & + & {
    margin-top: 0.5rem;
  }
`;

export const ButtonIconContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 3rem;
  height: 100%;
`;

export const ButtonIcon = styled.img`
  width: 100%;
  height: auto;
`;

export const ButtonText = styled.h4`
  margin-left: 1rem;
  width: 100%;
  height: auto;
  font-weight: 600;
  text-align: left;
`;
