import React from "react";
import CharacterCard from "./components/CharacterCard";
import Header from "./components/Header";
import PaginationNav from "./components/PaginationNav";

const App = () => {

  return (
    <div
      style={{
        minHeight: "100vh"
      }}
    >
      <Header />
      <PaginationNav />
      <section className="grid grid-maxcols-4 mg-s">
        <CharacterCard />
      </section>
    </div>
  );
};

export default App;
