import React from "react";
import { AuthenticatedApp } from "./AuthenticatedApp";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <AuthenticatedApp />
      </BrowserRouter>
    </div>
  );
};

export default App;
