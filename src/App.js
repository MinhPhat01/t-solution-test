import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
