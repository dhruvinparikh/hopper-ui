import { connect } from 'react-redux';
import faqs from './faqs.component';

const mapStateToProps = state => {
  return {
    faqs: state.faqsReducer.faqs
  };
};

const mapDispatchToPpops = null;

export default connect(
  mapStateToProps,
  mapDispatchToPpops
)(faqs);
