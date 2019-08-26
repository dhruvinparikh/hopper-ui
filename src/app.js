import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Error from './components/error';
import Router from './router/router.container';
import styles from './app.module.scss';
import LeftSideBar from './components/leftside-bar';
import PropTypes from 'prop-types';
import { Connectors } from 'web3-react';
import Web3Provider from 'web3-react';

const { InjectedConnector } = Connectors;

const MetaMask = new InjectedConnector({ supportedNetworks: [4] });


const connectors = { MetaMask };

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <Web3Provider connectors={connectors} libraryName="ethers.js">
        <div>
          <Error>
            <div className={styles.row}>
              <div className={styles.column}>
                <Header />
                <Footer />
              </div>
            </div>
            <div className={styles.row}>
              {isLoggedIn && <LeftSideBar />}
              <div className={styles.column}>
                <Router />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.column}>
              </div>
            </div>
          </Error>
        </div>
      </Web3Provider>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default App;
