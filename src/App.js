import React from "react";
import { Card } from "./components/Card";
import { News } from "./Assets/News";
import { Container } from "./styles";
import { Header } from "./components/Header";

export function App() {
  const newsGroup = News;

  return (
    <>
      <Header />
      <Container>
        {newsGroup.map((item) => (
          <Card data={item} />
        ))}
      </Container>
    </>
  );
}
