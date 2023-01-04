import React, { useState } from 'react';
import { Route, Router, Routes, RouteProps } from 'react-router-dom';
import {} from 'react-router';
import './App.css';
import TableView from './views/TableView/TableView';
import { UserView } from './views/UserView/UserView';

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
