import { connect } from 'react-redux';
import getImplementation from '../../redux/selectors/selector';
import { counter } from '../../redux/actions';
import App from './App';

const mapStateToProps = (state) => ({
  implementation: getImplementation(state),
});

const mapDispatchToProps = (dispatch) => ({
  counter: (num) => dispatch(counter(num)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
