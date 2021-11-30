import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import { useGetExchangesQuery } from '../services/cryptoApi';
import { Loader } from './Loader';
import HTMLReactParser from 'html-react-parser';

const { Text } = Typography;
const { Panel } = Collapse;

export const Exchanges = () => {
  const { data, isLoading } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;

  if (isLoading) return <Loader />;

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
        {exchangesList.map((exchange) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchange.id}
                showArrow={false}
                header={
                  // <Row key={exchange.id}>
                  //   <Col span={6}>
                  //     <Text>
                  //       <strong>{exchange.rank}.</strong>
                  //     </Text>
                  //     {/* <Avatar
                  //       className="exchange-image"
                  //       src={exchange.iconUrl}
                  //     />
                  //     <Text>
                  //       <strong>{exchange.name}</strong>
                  //     </Text> */}
                  //   </Col>
                  //   <Col span={6}>${millify(exchange.volume)}</Col>
                  //   <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                  //   <Col span={6}>{millify(exchange.marketShare)}%</Col>
                  // </Row>
                  <Row>
                    <Col style={{ flex: '100%' }} span={6}>
                      col-6
                    </Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                  </Row>
                }
              >
                {HTMLReactParser(exchange.description || '')}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};
