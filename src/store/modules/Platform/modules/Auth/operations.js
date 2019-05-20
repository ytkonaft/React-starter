import FetchClient from 'app/utils/FetchClient';
import IdsAndByIds from 'app/utils/IdsAndByIds';
import { usersFetch, setUsers } from './actions';

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await FetchClient.get('/data');
    dispatch(setUsers(IdsAndByIds(data)));
    dispatch(usersFetch(false));
  } catch (error) {
    console.log(error);
  }
};
