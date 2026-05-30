
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { ProjectDetails } from "./pages/ProjectDetails";
import { Toaster } from "./components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
function App() {
  return(
  <>
  <BrowserRouter>
  <Routes>
    <Route index element={<Home/>}/>
    <Route path="/project/:id" element={<ProjectDetails />} />
    <Route path="*" element={<NotFound/>}/>
  </Routes>
  <Toaster />
  <Analytics />
  </BrowserRouter>
  </>
  );
  
}

export default App
