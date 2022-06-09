import './App.css';
import { Provider } from 'react-redux';
import {store} from './store/index';
import { SidebarNavigation } from './components/SidebarNavigation/SidebarNavigation';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <SidebarNavigation />
      </Provider>
    </div>
  );
}

export default App;
