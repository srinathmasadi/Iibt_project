import './App.css';
import "../src/Styles/auth.css"
import { Store } from './Store';
import {Provider} from 'react-redux'
import Navigators from './navigators';
import Admin from './Screens/Modals/Admin';

function App() {
  return (
    <Provider store={Store}>
      <Navigators />
    </Provider>
 
  );
}

export default App;
