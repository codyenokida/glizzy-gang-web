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
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 1rem;
  font-weight: 700;
  margin: 0 1.5rem;
`;

export const Weiner = styled.div`
  width: 2rem;
  height: 2rem;
  background-image: url("images/small-glizzy.png");
  background-position: left center;
  background-size: 2rem 2rem;
  background-repeat: no-repeat;
`;

export const Weiner180 = styled(Weiner)`
  transform: scaleX(-1);
`;
