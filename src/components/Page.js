import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Page = ({ children, fullWidth = false }) => {
  return (
    <div id="page">
      <Header />
      <main id="main">
        <section>
          <div className={`${fullWidth ? "full-width" : ""}`}>{children}</div>
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Page;
