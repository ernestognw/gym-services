import React, { Component } from "react";
import Layout from "./components/layout";
import ServiceCard from "./components/service-card";
import Modal from "./components/modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      services: [],
      inputForm: {
        serviceType: "",
        serviceKey: "",
        maxTime: "",
        type: "",
        cost: "",
        hasInstructor: false,
        maxPeople: "",
        descOrSport: ""
      }
    };
  }

  handleInput = event => {
    const { target } = event;
    const { inputForm } = this.state;
    this.setState({
      inputForm: {
        ...inputForm,
        [target.name]: target.value
      }
    });
  };

  toggleModal = () => {
    const { modalOpen } = this.state;
    this.setState({
      modalOpen: !modalOpen,
      inputForm: {
        serviceType: "",
        serviceKey: "",
        maxTime: "",
        type: "",
        cost: "",
        hasInstructor: false,
        maxPeople: "",
        descOrSport: ""
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    const { services, modalOpen, inputForm } = this.state;
    return (
      <Layout toggleModal={this.toggleModal}>
        {services.map((service, id) => (
          <ServiceCard key={id} service={service} />
        ))}
        <Modal
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
          form={inputForm}
          toggleModal={this.toggleModal}
          active={modalOpen}
        />
      </Layout>
    );
  }
}

export default App;
