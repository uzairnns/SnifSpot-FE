import Index from'./components/spot/index'
import Create from './components/spot/create'
import Show from './components/spot/show';
import Edit from './components/spot/edit';
import { Route, Routes } from "react-router-dom";
import LoginPage from './components/authentication/LoginPage';
import SignupPage from './components/authentication/SignupPage';


function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/spot/create" element={<Create />}></Route>
        <Route exact path="show/:id" element={<Show />}></Route>
        <Route exact path="/edit/:id" element={<Edit />}></Route>
        <Route exect path="/login" element={<LoginPage />}></Route>
        <Route exect path="/signup" element={<SignupPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
