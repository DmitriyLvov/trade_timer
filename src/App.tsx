import { Route, Routes } from 'react-router-dom';
import { TableView } from './views/TableView/TableView';
import { UserView } from './views/UserView/UserView';
import './App.css';
import SessionProvider from './providers/SessionProvider';

function App() {
  return (
    <div className="App">
      <SessionProvider>
        <Routes>
          <Route path="/" element={<TableView />} />
          <Route path="/user/:userNumber" element={<UserView />} />
        </Routes>
      </SessionProvider>
    </div>
  );
}

export default App;
