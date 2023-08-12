import './App.css';
import "../src/Styles/auth.css"
import { Store } from './Store';
import {Provider} from 'react-redux'
// import AuthPage from './Screens/AuthPage';
import Dashboard from './Screens/Dashboard';
import Navigators from './navigators';

function App() {
  return (
    <Provider store={Store}>
      <Navigators />
    </Provider>
  );
}

export default App;
