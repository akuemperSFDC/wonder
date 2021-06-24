import './UserInfo.css';
import moment from 'moment';

const UserInfo = ({ question }) => {
  return (
    <div className='user-info'>
      <div>
        <img
          className='user-picture'
          src='https://secure.img1-fg.wfcdn.com/im/02238154/compr-r85/8470/84707680/pokemon-pikachu-wall-decal.jpg'
          alt=''
        />{' '}
      </div>
      <div className='user-specifics'>
        <p>{question.User.username}</p>
        <div className='comment-post-date'>
          Posted {moment(question.createdAt).format('ddd, hA')}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
