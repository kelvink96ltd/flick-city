import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { HomePage, ListPage } from './pages';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <MantineProvider withNormalizeCSS withGlobalStyles>
        <Routes>
          <Route path="" element={<HomePage/>}></Route>
          <Route path="lists/:listType" element={<ListPage/>}></Route>
        </Routes>
      </MantineProvider>
    </BrowserRouter>
  );
};

export default App;
