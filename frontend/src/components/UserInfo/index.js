import './UserInfo.css';
import moment from 'moment';
import UserOptions from '../UserOptions';
import { useEffect, useState } from 'react';
import { getUsers, getOneUser } from '../../store/user';
import { useSelector, useDispatch } from 'react-redux';
var _ = require('lodash');

const UserInfo = ({
  userOptions,
  question,
  showUserOptions,
  id,
  showModal,
  openModal,
}) => {
  const dispatch = useDispatch();
  const [userControls, setUserControls] = useState('hidden-control');
  const [spinAnimate, setSpinAnimate] = useState('spin-off');
  // const assignedUser = users.find((user) => user.id === question.id);
  // const user = dispatch(getOneUser(question.userId));
  // console.log(user);

  const handleClick = (e) => {
    if (userControls === 'hidden-control') {
      return;
    } else {
      showUserOptions(Number(e.target.id));
    }
  };

  const handleClickSpinAnimate = (e) => {
    spinAnimate === 'spin-off'
      ? setSpinAnimate('spin-on')
      : setSpinAnimate('spin-off');
  };

  // useEffect(() => {
  //   // dispatch(getUsers());
  // }, []);

  return (
    <div className='user-info-container'>
      <div className='user-info'>
        <div>
          <img
            className='user-picture'
            src={question?.User?.profileImgUrl}
            alt=''
          />
        </div>
        <div className='user-specifics'>
          <p>{question?.User?.username}</p>
          <div className='comment-post-date'>
            Posted {moment(question.createdAt).format('ddd, hh:mmA')}
          </div>
        </div>
      </div>
      <div className='user-info-ellipse-container'>
        <i
          id={id}
          onClick={(e) => {
            handleClick(e);
            handleClickSpinAnimate();
          }}
          className={`fal fa-ellipsis-h fa-2x ${
            userControls === 'hidden-control' ? 'change-ellipse' : ''
          } ${spinAnimate}`}
        ></i>
        <UserOptions
          setUserControls={setUserControls}
          userControls={userControls}
          userOptions={userOptions}
          id={id}
          question={question}
          showUserOptions={showUserOptions}
          showModal={showModal}
          openModal={openModal}
        />
      </div>
    </div>
  );
};

export default UserInfo;
