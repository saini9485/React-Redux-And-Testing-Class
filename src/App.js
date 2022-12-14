
// import { Counter } from "./components/reduxClasses/counter/Counter";
import { Dashboard } from "./components/reduxClasses/reduxAuth/Dashboard";
import { Home } from "./components/reduxClasses/reduxAuth/Home";
import { LoginForm } from "./components/reduxClasses/reduxAuth/LoginForm";


function App() {
  return (
    <div>

      {/* <Counter/> */}
      <Dashboard />
      <Home />
    <LoginForm/>
    </div>
  );
}

export default App;
