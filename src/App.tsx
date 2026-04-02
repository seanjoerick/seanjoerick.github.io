import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "@layouts/Main";

import Home from "@pages/Home";
import Skills from "@pages/Skills";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
