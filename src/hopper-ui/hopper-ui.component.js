import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import Header from '../components/hopper-ui/header';
import Banner from '../components/hopper-ui/banner';
import HopperTabs from '../components/hopper-ui/hopper-tabs';
import styles from './hopper-ui.module.scss';
import SendReceive from './pages/send-receive';
import HowItWorks from './pages/how-it-works';
import HireUS from './pages/hire-us';
import Footer from '../components/hopper-ui/footer';
import FAQS from './pages/faqs';
import getWeb3 from '../utils/getWeb3';

export default class NewUI extends Component {
  constructor(props) {
    super(props);
    props.getAndSetLiquidityPool();
  }

  async componentDidMount() {
    this.unlisten = this.unlisten.bind(this);
    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts();
    this.props.setAccounts(accounts);
    const id = setInterval(()=>
      this.props.getAndSetLiquidityPool(),60000*5);
    this.setState({id});
  }

  unlisten() {
    this.props.history.listen(() => {
      window.scrollTo(0, 0);
    });
  }

  componentWillUnmount() {
    this.unlisten();
    clearInterval(this.state.id);
  }

  handlePageChange = (e, value) => {
    this.props.changePage(value);
  };

  render() {
    const { labels, label } = this.props;
    return (
      <div>
        <Header className={styles.header}>
          <Banner />
          <HopperTabs
            labels={labels}
            value={labels.indexOf(label)}
            onChange={this.handlePageChange}
            className={styles.tabs}
          />
        </Header>
        {/* TODO DP Make it work with router */}
        {/* <Switch>
          {routes
            .filter(routes => routes.component)
            .map(route => (
              <Route
                exact
                path={route.path}
                key={route.name}
                component={route.component}
              />
            ))}
        </Switch> */}
        <div className={styles.content}>
          {label === labels[0] && <SendReceive />}
          {label === labels[1] && <HowItWorks />}
          {label === labels[2] && <FAQS />}
          {label === labels[3] && <HireUS />}
          <Footer />
        </div>
      </div>
    );
  }
}
