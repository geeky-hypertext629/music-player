import React from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Bottombar from "./components/Bottombar";
function App() {
  return (
    <>
    <div className="totalPage">
      <Sidebar />
      <Main/>
      </div>
      <hr />
      <Bottombar />
    </>
  );
}

export default App;
