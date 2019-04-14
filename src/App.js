import React, { Component } from "react";
import Layout from "./components/layout";
import ServiceCard from "./components/service-card";
import Modal from "./components/modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      services: [
        {
          infoType: "device",
          title: "Escaladora",
          maxTime: "50",
          serviceKey: "C-002",
          type: "C",
          cost: "50",
          hasInstructor: true
        },
        {
          infoType: "device",
          title: "Caminadora",
          maxTime: "10",
          serviceKey: "E-001",
          type: "E",
          cost: "60",
          hasInstructor: false
        }
      ]
    };
  }

  toggleModal = () => {
    const { modalOpen } = this.state;
    this.setState({
      modalOpen: !modalOpen
    });
  };

  render() {
    const { services, modalOpen } = this.state;
    return (
      <Layout toggleModal={this.toggleModal}>
        {services.map((service, id) => (
          <ServiceCard key={id} service={service} modalOpen={modalOpen} />
        ))}
        <Modal toggleModal={this.toggleModal} active={modalOpen} />
      </Layout>
    );
  }
}

export default App;
