import React from "react";

import "../assets/css/main.css";

import Header from "../components/Header";
import About from "../components/About";
import Resume from "../components/Resume";
import Footer from "../components/Footer";
import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <Header />
    <About />
    <Resume />
    <Footer />
  </Layout>
);

export default IndexPage;
