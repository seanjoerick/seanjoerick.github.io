import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "@layouts/Main";
import Home from "@pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
