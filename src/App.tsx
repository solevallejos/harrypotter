import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Character, FavoritesList, NotFound } from "./routes/routes";
import { Container, GlobalStyles } from "./components/Container/styled";
import NavigationHeader from "./components/NavigationHeader";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<Character />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
