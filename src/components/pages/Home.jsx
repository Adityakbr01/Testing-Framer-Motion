import React from "react";

import Marquee from "../marque";
import Marque from "../marque";
import Landing from "../Landing";
import Section_1 from "../section/Section_1";
import Section_2 from "../section/Section_2";
import ElasticHamburger from "../ElasticHamburger";

function Home() {
  return (
    <div className="w-full h-full pb-36">
      <Landing />
      <Section_1 />
      <Section_2 />
      <ElasticHamburger />
    </div>
  );
}

export default Home;
