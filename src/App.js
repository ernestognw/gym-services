import React, { Component } from "react";
import { ToastContainer, Slide, toast } from "react-toastify";
import Layout from "./components/layout";
import ServiceCard from "./components/service-card";
import Modal from "./components/modal";
import "react-toastify/dist/ReactToastify.min.css";
import EmptyState from "./components/empty-state";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      services: [],
      inputForm: {
        category: "",
        serviceKey: "",
        maxTime: "",
        type: "",
        cost: "",
        hasInstructor: "",
        maxPeople: "",
        descOrSport: ""
      }
    };
  }

  handleInput = async event => {
    const { target } = event;
    const { inputForm } = this.state;
    await this.setState({
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
        category: "",
        serviceKey: "",
        maxTime: "",
        type: "",
        cost: "",
        hasInstructor: "",
        maxPeople: "",
        descOrSport: ""
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { services, inputForm } = this.state;
    this.setState({
      services: [...services, inputForm],
      inputForm: {
        category: "",
        serviceKey: "",
        maxTime: "",
        type: "",
        cost: "",
        hasInstructor: "",
        maxPeople: "",
        descOrSport: ""
      }
    });
    this.toggleModal();
    toast.success("Servicio añadido correctamente");
  };

  handleDelete = id => {
    const { services } = this.state;
    services.splice(id, 1);
    this.setState({
      services
    });
  };

  download = () => {
    const { services } = this.state;
    let txtString = "";

    for (let i = 0; i < services.length; i++) {
      const txtArray = [];

      txtArray.push(`${services[i].type}-${services[i].serviceKey}`);
      txtArray.push(services[i].maxTime);
      txtArray.push(services[i].type);
      txtArray.push(services[i].cost);

      if (services[i].category === "device") {
        txtArray.push(services[i].hasInstructor);
      } else {
        txtArray.push(services[i].maxPeople);
      }

      txtArray.push(services[i].descOrSport);
      txtString += txtArray.toString().replace(/,/g, " ");

      if (i < services.length - 1) {
        txtString += "\n";
      }
    }

    const file = new Blob([txtString], { type: "text/plain" });
    const element = document.createElement("a");
    element.href = URL.createObjectURL(file);
    element.download = "Servicios.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  render() {
    const { services, modalOpen, inputForm } = this.state;
    return (
      <Layout
        download={this.download}
        empty={services.length === 0}
        toggleModal={this.toggleModal}
      >
        {services.map((service, id) => (
          <ServiceCard
            key={id}
            id={id}
            service={service}
            handleDelete={this.handleDelete}
          />
        ))}
        {services.length === 0 && <EmptyState />}
        <Modal
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
          form={inputForm}
          toggleModal={this.toggleModal}
          active={modalOpen}
        />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          rtl={false}
          pauseOnVisibilityChange={false}
          draggable
          pauseOnHover={false}
          transition={Slide}
        />
      </Layout>
    );
  }
}

export default App;
