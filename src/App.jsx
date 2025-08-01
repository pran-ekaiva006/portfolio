
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
function App() {
  return(
  <>
  <Toaster/>
  <BrowserRouter>
  <Routes>
    <Route index element={<Home/>}/>

    <Route path="*" element={<NotFound/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
  
}

export default App
