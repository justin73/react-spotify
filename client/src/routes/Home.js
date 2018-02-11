import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';

export const Home = (props) => {
  return (
    <Container className="root">
      <Row>
        <Col sm="12" md={{ size: 4, offset: 1 }}>
          <Link to="/search">
            <Button className='actionBtn' variant="raised">
              <span>Search by Artist</span> 
            </Button>
          </Link>
        </Col>
        <Col sm="12" md={{ size: 4, offset: 1 }}>
          <Link to="/newSongs">
            <Button className='actionBtn' variant="raised">
              <span>View New Releases</span>
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}