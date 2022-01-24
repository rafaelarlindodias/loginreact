import React, { useState } from 'react';

import Login from './Login'; // importa o menu de navegação

import {
  Toast,
  Container,
  Button,
  Form,
} from 'react-bootstrap';

function App() {
  return (
    <div>
      <Login usuario="rafael.dias" />
    </div>
  );
}

export default App;
