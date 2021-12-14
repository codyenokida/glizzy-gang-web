import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 1rem;
  font-weight: 700;
`;

export const Weiner = styled.div`
  width: 1rem;
  height: 1rem;
  background-image: url("images/small-glizzy.png");
  background-position: left center;
  background-size: 1rem 1rem;
  background-repeat: no-repeat;
`;

export const Weiner180 = styled(Weiner)`
  transform: rotate(270deg);
`;
