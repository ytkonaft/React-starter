import React from 'react';
import { Link } from 'react-router-dom';
import './index.sass';

class DetailPage extends React.PureComponent {
  render() {
    const { User } = this.props;
    if (!User) return <h1>Loading</h1>;
    return (
      <div className="user-page">
        <div className="page-container">
          <div>
            <Link to="/" className="go-back-btn">
              Home
            </Link>
          </div>
          <div>
            <h1>
              {User.first_name} {User.last_name}
            </h1>
            <ul>
              <li> Ip: {User.ip_address}</li>
              <li> Email: {User.email}</li>
              <li> Gender: {User.gender}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailPage;
