import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import Home from './components/Home';
import Editor from './components/Editor';

function App() {
  return (
    <Provider store={store}>
      <div className="App">MEME GENERATOR</div>
        <Home />
        <Editor />
    </Provider>
  );
}

export default App;
