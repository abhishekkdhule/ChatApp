import Homepage from "./Homepage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Chat from "./Chat";

function App() {
  return (
    <>
    {/* <Homepage/> */}
    <Router>
      <Switch>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="">
            <Homepage />
          </Route>
        </Switch>
    </Router>
  </>
  );
}

export default App;
