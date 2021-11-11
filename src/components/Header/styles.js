import styled from "styled-components";

export const Container = styled.header`
  height: 250px;
  background: linear-gradient(
    90deg,
    #574ae8 0%,
    #3ea1db 100%
  );
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 41px 0;
`;

export const HeaderContainer = styled.div`
  width: 900px;
  display: flex;
  justify-content: space-between;
  background-color: transparent;

  @media (max-width: 768px) {
    width: 330px;
  }
`;

export const Text = styled.p`
  background-color: transparent;
  color: white;
  font-size: 24px;
  font-family: sans-serif;
  font-weight: normal;
`;

export const ContainerInput = styled.div`
  width: 900px;
  height: 65px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    width: 330px;
  }
`;

export const TextInput = styled.input.attrs(
  ({ placeholder }) => ({
    placeholder:
      placeholder || "Pesquisar no blog",
  })
)`
  width: 850px;
  height: 65px;
  border-radius: 5px;
  background: transparent;
  border: none;
  padding: 21px;
  color: white;

  @media (max-width: 768px) {
    width: 310px;
  }
`;
