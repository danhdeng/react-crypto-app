import React from 'react';
import {
  Navbar,
  HomePage,
  Cryptocurrencies,
  Exchanges,
  CryptoDetails,
  News,
} from './components';
import './App.css';
import { Layout, Typography, Space } from 'antd';
import { Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

export const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />
              <Route exact path="/exchanges" element={<Exchanges />} />
              <Route exact path="/news" element={<News />} />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: 'white', textAlign: 'center' }}
          >
            Crypto Universe <br />
            All rights reserved.
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};
