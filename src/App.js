
// import { Counter } from "./components/reduxClasses/counter/Counter";
// import { useSelector } from "react-redux";
// import { Dashboard } from "./components/reduxClasses/reduxAuth/Dashboard";
// import { Home } from "./components/reduxClasses/reduxAuth/Home";
// import { LoginForm } from "./components/reduxClasses/reduxAuth/LoginForm";

import { Score } from "./components/scocererAssignment/Score";


function App() {
  // const loggedInUser = useSelector((state) => {
  //   return state.loggedInUser
  // })
  return (
    <div>

      {/* <Counter/> */}
      {/* {
        loggedInUser? (<> <Dashboard />
        <Home />
         </>):
         (   
    <LoginForm/>)
       
      } */}
     <Score/>
   
    </div>
  );
}

export default App;
