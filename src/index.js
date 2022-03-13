import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Page } from './components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Rules } from './components/rules';

ReactDOM.render(
  <Router basename='/santo-domingo-shifts'>
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="/rules" element={<Rules />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
