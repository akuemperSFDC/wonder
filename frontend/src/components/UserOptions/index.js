import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOneUser } from '../../store/user';
import './UserOptions.css';
import Questioner from './Questioner.js';
// import Commenter from './Commenter.js';

const UserOptions = ({
  userOptions,
  id,
  question,
  setUserControls,
  userControls,
  showUserOptions,
}) => {
  const dispatch = useDispatch();
  const currentUserId = useSelector((state) => state.session.user.id);
  const users = useSelector((state) => Object.values(state.users));

  const currUser = users.find((user) => user.id === currentUserId);

  // let topAnswer;
  // if (Number(question.id) === Number(currentUserId)) {
  //   topAnswer = question?.Answers[0];
  // }

  // SAVE FOR LATER ADD ELLIPSE NEAR ANSWER OR AT BOTTOM OF COMPONENT
  // let currentUserRole;
  // if (currUser?.id === question?.ownerId) {
  //   console.log((currentUserRole = 'questioner'));
  // } else if (currUser?.id === topAnswer?.userId) {
  //   currentUserRole = 'commenter';
  // }

  const handleSetUserControlsVisible = useCallback(() => {
    setUserControls(null);
  }, []);

  const handleSetUserControlsHidden = useCallback(() => {
    setUserControls('hidden-control');
  }, []);

  useEffect(() => {}, [
    handleSetUserControlsVisible,
    handleSetUserControlsHidden,
  ]);

  let currentUserRole;
  if (currUser?.id === question?.ownerId) {
    currentUserRole = 'questioner';
  }

  let renderProperComponentBasedOnRole;
  if (currentUserRole === 'questioner') {
    handleSetUserControlsVisible();
    renderProperComponentBasedOnRole = (
      <Questioner
        question={question}
        setUserControls={setUserControls}
        showUserOptions={showUserOptions}
      />
    );
  } else {
    handleSetUserControlsHidden();
    renderProperComponentBasedOnRole = 'hiddenControls';
  }

  useEffect(() => {
    dispatch(getOneUser(currentUserId));
  }, [dispatch, currentUserId]);

  return (
    <>
      <div
        className={`user-options-container ${
          userOptions === id ? 'open' : 'hidden'
        }`}
      >
        <div className='user-options box-arrow-right'>
          {renderProperComponentBasedOnRole === 'hiddenControls'
            ? null
            : renderProperComponentBasedOnRole}
        </div>
      </div>
    </>
  );
};

export default UserOptions;
