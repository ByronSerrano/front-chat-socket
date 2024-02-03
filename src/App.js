  import './App.css';
import { NameInput } from './components/NameInput';
import { MessageContainer } from './components/MessageContainer';
import { WebSocket } from './components/WebSocket';

function App() {
  return (
    <div className="App">
      <h1 className="title">Chat BC</h1>
      <main>
        <NameInput/>
        <MessageContainer/>
      </main>
    </div>
  );
}

export default App;
