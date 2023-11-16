import React from "react";
import { Mobile } from "./components/Mobile";
import "./components/common.css"

function App() {
  return (
    <div className="main">
      <Mobile url="iphone1" heading="Iphone 15" price="RS.89,000" desc="Apple iphone 15 (Deep Gold,256 GB ROM)" />
      <Mobile url="iphone2" heading="Iphone 15 Plus" price="RS.1,07,999" desc="Apple iphone 15 Plus (Deep Pink,128 GB ROM)" />
      <Mobile url="iphone3" heading="Iphone 15 Pro" price="RS.1,48,000" desc="Apple iphone 15 Pro (Deep Gray,512 GB ROM)" />
      <Mobile url="iphone4" heading="Iphone 15 Pro Max" price="RS.1,99,999" desc="Apple iphone 15 Pro Max (Deep White,1 TB ROM)" />
    </div>
  );
}

export default App;
