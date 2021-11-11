import styled from "styled-components";

export const Container = styled.div`
  width: 900px;
  border-radius: 5px;
  background-color: white;
  padding: 25px 30px;
  margin-bottom: 40px;
  position: relative;

  @media (max-width: 768px) {
    width: 340px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 840px;
  background-color: white;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    width: 280px;
  }
`;

export const PublishedAt = styled.small`
  background-color: white;
  color: #b6b6b6;
  font-size: 16px;
`;

export const Title = styled.h1`
  background-color: white;
  font-family: Lexend Deca, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
`;

export const News = styled.p`
  padding-top: 25px;
  background-color: white;
  color: #b6b6b6;
  font-size: 18px;
`;
