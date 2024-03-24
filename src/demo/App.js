import React from "react";
import { BabyChangingIcon, PhoneIcon, SoyaIcon } from "../lib";

const App = () => (
  <div
    style={{
      display: "flex",
      gap: "1rem",
      flexFlow: "row wrap",
    }}
  >
    <BabyChangingIcon width={100} height={100} />
    <PhoneIcon width={100} height={100} />
    <SoyaIcon width={100} height={100} />
  </div>
);

export default App;
