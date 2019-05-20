import { connect } from 'react-redux';
import { usersListOperations } from 'store/modules/UsersList';
import DetailPage from './component';

const mapStateToProps = (
  {
    UsersList: {
      users: { userById }
    }
  },
  props
) => ({
  User: userById && userById[props.match.params.id]
});

export default connect(mapStateToProps)(DetailPage);
