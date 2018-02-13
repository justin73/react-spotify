import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';

export const Home = (props) => {
  return (
    <Container className="root">
      <Row>
        <Col xs="12" sm={{ size: 4, offset: 1 }} md={{ size: 4, offset: 1 }}>
          <Link to="/search">
            <Button className='btn-primary' variant="raised">
              <span>Search by Artist</span> 
            </Button>
          </Link>
        </Col>
        <Col xs="12" sm={{ size: 4, offset: 1 }} md={{ size: 4, offset: 2 }}>
          <Link to="/newSongs">
            <Button className='btn-primary' variant="raised">
              <span>View New Releases</span>
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}