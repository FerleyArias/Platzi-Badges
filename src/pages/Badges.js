import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import PageLoadingBadges from '../components/PageLoadingBadges';
import MiniLoader from '../components/MiniLoader';
import PageError from '../components/PageError';
import api from '../api';

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
    this.intervalId = setInterval(this.fetchData, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {

    if (this.state.error) {
      return <PageError error={this.state.error}/>;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
          {this.state.loading && !this.state.data ?  <PageLoadingBadges/> : <BadgesList badges={this.state.data} />}
          {(this.state.loading && this.state.data) && <MiniLoader/>}
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;