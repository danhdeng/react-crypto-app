import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useGetExchangesQuery } from '../services/cryptoApi';
import { Loader } from './Loader';

const { Text } = Typography;
const { Panel } = Collapse;

export const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;
  const style = { background: '#0092ff', padding: '8px 0' };
  if (isFetching) return <Loader />;

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
                  (<Row>
                    <Col span={6} offset={6}>
                      col-6 col-offset-6
                    </Col>
                    <Col span={6} offset={6}>
                      col-6 col-offset-6
                    </Col>
                  </Row>)
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

// export default Exchanges;
