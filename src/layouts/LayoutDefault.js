import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const LayoutDefault = ({ children }) => (
  <>
    <Header navPosition="center" hideSignin className="reveal-from-bottom" />
    <main className="site-content">{children}</main>
    <Footer className="mt-16" />
  </>
);

export default LayoutDefault;
