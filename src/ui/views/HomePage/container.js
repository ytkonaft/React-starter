import { connect } from 'react-redux';
// import { usersListOperations } from 'store/modules/UsersList';
import HomePage from './component';

const mapStateToProps = ({ Platform }) => ({
  Platform
});

// const mapDispatchToProps = {
//   ...usersListOperations
// };

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(HomePage);
