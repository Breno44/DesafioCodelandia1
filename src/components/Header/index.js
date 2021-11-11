import React from "react";
import {
  Container,
  HeaderContainer,
  Text,
  TextInput,
  ContainerInput,
} from "./styles";
import { FaSearch } from "react-icons/fa";

export function Header() {
  return (
    <Container>
      <HeaderContainer>
        <Text>Codelândia</Text>
        <Text>blog</Text>
      </HeaderContainer>
      <ContainerInput>
        <FaSearch
          color="white"
          size={24}
          style={{
            backgroundColor: "transparent",
            marginLeft: "25px",
          }}
        />
        <TextInput />
      </ContainerInput>
    </Container>
  );
}
