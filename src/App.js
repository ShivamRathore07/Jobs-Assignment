import { HomePage } from './components/HomePage';
import { Route, Routes } from "react-router-dom";
// https://jobapplicationshivam.herokuapp.com/
function App() {
  return (
    <div className="App">
      <Routes>
            <Route path="/" element={<HomePage/>}>Home</Route>
            <Route path="/jobs" element={<HomePage/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
