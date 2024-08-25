import React from "react";
import Header from "./component/Header";
import DealerInfo from "./component/DealerInfo";
import Container from "react-bootstrap/Container";
import Services from "./component/Services"
import Payment from "./component/Payment"

function App() {
  return (
    <>
      <Header />
      <Container>
        <DealerInfo />
        <Services/>
        <Payment/>
      </Container>
    </>
  );
}

export default App;
