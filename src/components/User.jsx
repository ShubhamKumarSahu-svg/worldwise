import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/fakeAuthContext';
import styles from './User.module.css';

function User() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate('/');
  }
  if (!user) return null;
  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;
