import React from 'react';
import { Typography, Row, Col, Card, Avatar } from 'antd';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import moment from 'moment';

const demoImage =
  'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';
const { Title, Text } = Typography;

export const News = ({ simplified }) => {
  const { data: cryptoNews, isLoading } = useGetCryptoNewsQuery({
    newsCategory: 'Cryptocurrency',
    count: simplified ? 6 : 24,
  });
  console.log(cryptoNews);
  return (
    <Row gutter={[24, 24]}>
      {cryptoNews?.value.map((newsItem, i) => (
        <Col xs={24} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={newsItem.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title level={4} className="news-title">
                  {newsItem.name}
                </Title>
                <img
                  style={{ maxWidth: '200px', maxHeight: '100px' }}
                  src={newsItem?.image?.thumbnail?.contentUrl || demoImage}
                  alt="news"
                />
              </div>
              <p>
                {newsItem.description.length > 100
                  ? `${newsItem.description.substring(0, 100)}...`
                  : newsItem.description}
              </p>
              <div className="provider-container">
	       <div>
                <Avatar
                  src={
                    newsItem?.provider[0]?.image?.thumbnail?.contentUrl ||
                    demoImage
                  }
                  alt="news"
                />
                <Text className="provider-name">
                  {newsItem.provider[0]?.name}
                </Text>
		</div>
		<Text>
                {moment(newsItem.datePublished).startOf('ss').fromNow()}
              </Text>
              </div>
              
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
