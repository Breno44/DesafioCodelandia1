import React, { useState } from "react";
import {
  FaRegHeart,
  FaHeart,
} from "react-icons/fa";
import {
  Container,
  HeaderContainer,
  PublishedAt,
  Title,
  News,
} from "./styles";

export function Card({ data }) {
  const [like, setLike] = useState(false);

  function handleLike() {
    setLike(!like);
  }

  return (
    <Container>
      <HeaderContainer>
        <PublishedAt>02 de jul, 2021</PublishedAt>
        {like ? (
          <FaHeart
            color={"#574AE8"}
            style={{
              background: "#fff",
              cursor: "pointer",
            }}
            size={21}
            onClick={handleLike}
          />
        ) : (
          <FaRegHeart
            color={"#574AE8"}
            style={{
              background: "#fff",
              cursor: "pointer",
            }}
            size={21}
            onClick={handleLike}
          />
        )}
      </HeaderContainer>
      <Title>{data.title}</Title>
      <News>{data.news}</News>
    </Container>
  );
}
