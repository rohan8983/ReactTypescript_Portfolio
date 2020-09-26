import * as React from "react";
import Header from "./Container/Header/Header";
import HeroSection from "./Container/Dashboard/HeroSection";
import Footer from "./Container/Footer/Footer";
import Container from "./Container/Dashboard/Container";
export interface HelloWorldProps {
  userName: String;
  lang: String;
}
export const App = (props: HelloWorldProps) => {
  return (
    <>
      <Header />
      <HeroSection />
      <Container />
      <Footer />
    </>
  );
};
