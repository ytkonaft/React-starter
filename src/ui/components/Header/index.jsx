import React from 'react';
import Ufo from 'ui/assets/ufo.svg';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './index.scss';

const Header = ({ id, label, score }) => (
  <Grid fluid className="header">
    <Grid>
      <Row>
        <Col xs={6}>
          <img src={Ufo} alt="ufo-logo" className="logo" />
        </Col>
        <Col xs={6}>
          <div className="header-btns">
            <Link to="/auth/sign-in">Sign In</Link>
            <Link to="/auth/sign-up">Sign Up</Link>
          </div>
        </Col>
      </Row>
    </Grid>
  </Grid>
);

export default Header;
