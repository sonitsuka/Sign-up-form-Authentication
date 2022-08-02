import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom"

ReactDOM.render(
  <Router>
      <App />
  </Router>, 
  document.getElementById("root")
)
// react 18 new update have to be come the parameter and root
// ReactDOM.render(navbar, document.getElementById("root"))
// ReactDOM.createRoot(document.getElementById("root")).render(navbar)
