import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Create from "./components/Create"
import Update from "./components/Update"
import Delete from "./components/Delete"
import Read from "./components/Read"


const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/update" element={<Update/>}/>
      <Route path="/delete" element={<Delete/>}/>
      <Route path="/read" element={<Read/>}/>
    </Routes>
    </>
  )
}

export default App