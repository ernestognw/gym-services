import React, { Component } from "react";
import Layout from "./components/layout";
import ServiceCard from "./components/service-card";

class App extends Component {
  render() {
    return (
      <Layout>
        <ServiceCard />
      </Layout>
    );
  }
}

export default App;
