
import { Link, useNavigate } from 'react-router-dom';
import styles from './NavigationBar.module.css';

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate('/');
  };

  return (
    <header className={styles.container}>
      {/* Left-aligned logo */}
      <div className={styles.logo}>
        <h2>SharpLearn</h2>
      </div>

      {/* Center-aligned navigation links */}
      <nav className={styles.menuItems}>
        <ul>
          <li className={`${styles.menuItem} ${styles.home}`}>
            <Link to="/home">Home</Link>
          </li>
          <li className={`${styles.menuItem} ${styles.progress}`}>
            <Link to="/progress">Progress Mark</Link>
          </li>
          <li className={`${styles.menuItem} ${styles.weeklyPlanner}`}>
            <Link to="/planner">Planner</Link>
          </li>
          <li className={`${styles.menuItem} ${styles.documentsLinks}`}>
            <Link to="/resources">Resources </Link>
          </li>
        </ul>
      </nav>

      {/* Right-aligned profile icon and sign out button */}
      <div className={styles.profileSection}>
        <img src="profile-icon.png" alt="User Profile" className={styles.profileIcon} />
        <button onClick={handleSignOut} className={styles.signOutButton}>
          Sign Out
        </button>
      </div>
    </header>
  );
};

export default NavigationBar;
