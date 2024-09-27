import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Page = ({ children }) => {
  return (
    <div id="page">
      <Header />
      <main id="main">
        <section>
          <div>{children}</div>
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Page;
