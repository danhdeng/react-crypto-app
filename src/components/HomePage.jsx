import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Loader } from './Loader';
import { Cryptocurrencies, News } from '../components';

const { Title } = Typography;

export const HomePage = () => {
  const { data, isLoading } = useGetCryptosQuery(10);
  if (isLoading)
    return (
      <div>
        <Loader />
      </div>
    );
  const globalStats = data?.data.stats;
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Statistic
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={`$${millify(globalStats.totalMarketCap)}`}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={`$${millify(globalStats.total24hVolume)}`}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-title-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={2} className="show-more">
          <Link to="/cryptocurrencies">show more</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified={true} />

      <div className="home-title-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies News in the world
        </Title>
        <Title level={2} className="show-more">
          <Link to="/news">show more</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};
