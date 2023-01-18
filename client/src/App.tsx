import React from "react";
import { AuthenticatedApp } from "./authenticated-app";
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
