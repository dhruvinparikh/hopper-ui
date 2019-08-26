import { connect } from 'react-redux';
import HowItWorks from './how-it-works.component';

const mapStateToProps = state => {
  return {
    steps: state.howItWorksReducer.steps
  };
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HowItWorks);
