import React,{Suspense} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Loading from "./Loading";

const Index = React.lazy(()=>import('./App'))

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loading/>}>
      <Index />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
