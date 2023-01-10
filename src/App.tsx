import { Route, Routes, } from 'react-router-dom';
import { TableView } from './views/TableView/TableView';
import { UserView } from './views/UserView/UserView';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TableView />} />
        <Route path="/user/:userNumber" element={<UserView />} />
      </Routes>
    </div>
  );
}

export default App;
