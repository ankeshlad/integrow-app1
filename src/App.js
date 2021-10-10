import logo from './logo.svg';
import './App.css';
import Header from '../src/components/header/HeaderNavigation'
import Login from './pages/loginpage/Login'
import Register from './pages/registerpage/Register';
import Employee from './pages/employeepage/EmployeePage';
import BackgroundImage from './components/backgroundImage/BackgroundImage';

function App() {
  return (
    <div className="App">
      
      <Header />
      
      {/* <Login /> */}
      <Register />
      {/* <Employee /> */}
    </div>
  );
}
export default App;
