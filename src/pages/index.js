import React from "react";
import Layout from "../components/layout";

class Index extends React.Component {
  sendMessage() {
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ name: "Static Web Apps CLI" }),
    })
      .then((response) => {
        console.log(response.body);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <Layout>
        <h1>Home</h1>
        <p>Hello Zurich</p>
        <button onClick={this.sendMessage}>Say Hello</button>
      </Layout>
    );
  }
}

export default Index;
