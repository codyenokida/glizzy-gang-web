import styled from "styled-components";
import breakPoints from "../../constants/breakpoints";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(#04a5f5, #055ca8);
  text-align: center;

  @media ${breakPoints.phoneOnly} {
    padding: 6rem 0 4rem 0;
  }
`;

type ApproveButtonProps = {
  loading: boolean;
};

export const ApproveButton = styled.div<ApproveButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9.25rem;
  height: 2.5rem;
  background-color: #f7d83c;
  border-radius: 0.5rem;
  font-weight: 700;
  transition: 0.2s;
  box-shadow: 0 4px 12px rgb(0, 0, 0, 0.32);
  color: black;
  font-family: "Rubik-Bold";
  cursor: pointer;

  opacity: ${(props) => (props.loading ? "0.2" : "1")};
  pointer-events: ${(props) => (props.loading ? "none" : "default")};

  &:hover {
    opacity: 0.8;
  }
  cursor: pointer;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
