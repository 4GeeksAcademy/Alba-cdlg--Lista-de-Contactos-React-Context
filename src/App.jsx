import { Navbar } from "./components/Navbar";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes"; 

const App = () => {
  return (
    <div>
      <Navbar /> 
      <RouterProvider router={router} /> 
    </div>
  );
};

export default App;
