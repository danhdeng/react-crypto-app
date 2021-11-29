import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';
import millify from 'millify';
import { Loader } from './Loader';

export const Cryptocurrencies = ({ simplified }) => {
  console.log('simplified', simplified);
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isLoading } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState();
  console.log('crytos list: ', cryptos);
  useEffect(() => {
    setCryptos(cryptoList?.data?.coins);
  }, [cryptoList]);
  if (isLoading) return <Loader />;
  return (
    <>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((item) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={item.id}>
            <Card
              title={`${item.rank}. ${item.name}`}
              extra={<img className="crypto-image" src={item.iconUrl} />}
              hoverable
            >
              <p>Price: {millify(item.price)}</p>
              <p>Market Cap: {millify(item.marketCap)}</p>
              <p>Dail Change: {millify(item.change)}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
