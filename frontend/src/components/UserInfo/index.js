import './UserInfo.css';
import moment from 'moment';
import UserOptions from '../UserOptions';
import { useEffect, useState } from 'react';
import { getUsers, getOneUser } from '../../store/user';
import { useSelector, useDispatch } from 'react-redux';
var _ = require('lodash');

const UserInfo = ({ userOptions, question, showUserOptions, id }) => {
  const dispatch = useDispatch();
  const [userControls, setUserControls] = useState('hidden-control');
  const users = useSelector((state) => Object.values(state.users));
  // const assignedUser = users.find((user) => user.id === question.id);
  // const user = dispatch(getOneUser(question.userId));
  // console.log(user);

  const userFound = _.find(users, function (user) {
    return user.id === question.ownerId;
  });

  const handleClick = (e) => {
    if (userControls === 'hidden-control') {
      return;
    } else {
      showUserOptions(Number(e.target.id));
    }
  };

  useEffect(() => {
    // dispatch(getUsers());
  }, []);

  return (
    <div className='user-info-container'>
      <div className='user-info'>
        <div>
          <img className='user-picture' src={userFound?.profileImgUrl} alt='' />
        </div>
        <div className='user-specifics'>
          <p>{userFound?.username}</p>
          <div className='comment-post-date'>
            Posted {moment(question.createdAt).format('ddd, hA')}
          </div>
        </div>
      </div>
      <div className='user-info-ellipse-container'>
        <i
          id={id}
          onClick={(e) => handleClick(e)}
          className={`fal fa-ellipsis-h fa-2x ${
            userControls === 'hidden-control' ? 'change-ellipse' : ''
          }`}
        ></i>
        <UserOptions
          setUserControls={setUserControls}
          userControls={userControls}
          userOptions={userOptions}
          id={id}
          question={question}
          showUserOptions={showUserOptions}
        />
      </div>
    </div>
  );
};

export default UserInfo;
