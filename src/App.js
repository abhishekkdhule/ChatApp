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
    <Router>
      <Switch>
          <Route path="/chat">
            <Chat />
          </Route>
        </Switch>
    </Router>
  </>
  );
}

export default App;
