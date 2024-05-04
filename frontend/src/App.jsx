import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Earth from "./components/Earth"
import Home from "./components/Home"
import Mars from "./components/Mars"
import ProtectedRoutes from "./components/utils/ProtectedRoutes";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />

          <Route element={<ProtectedRoutes/>}>
            <Route path='/earth' element={<Earth />} />
            <Route path='/mars' element={<Mars />} />
          </Route>
     
        </Routes>
      </Router>
    </>
  )
}

export default App
