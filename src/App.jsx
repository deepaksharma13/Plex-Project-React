import React from "react";
import Header from "./component/Header";
import DealerInfo from "./component/DealerInfo";
import Container from "react-bootstrap/Container";
import Services from "./component/Services"
import Deals from "./component/Deals"
import Payment from "./component/Payment"
import Question from "./component/Question"
import Footer from "./component/Footer"

function App() {
  return (
    <>
      <Header />
      <Container>
        <DealerInfo />
        <Deals/>
        <Services/>
        <Payment/>
        <Question/>
        <Footer/>
      </Container>
    </>
  );
}

export default App;
