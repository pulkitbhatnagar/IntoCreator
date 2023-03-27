import { Switch, Route, HashRouter } from "react-router-dom";
import ListDisplay from "./Features/DisplayList";
import InputForm from "./Features/Form";
const App = () => {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={InputForm} />
          <Route exact path="/list" component={ListDisplay} />
        </Switch>
      </HashRouter>
    </>
  );
};

export default App;
