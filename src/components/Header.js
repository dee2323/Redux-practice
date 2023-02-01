import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/slices/authSlice';
import classes from './Header.module.css';

const Header = () => {
  const isAuth = useSelector(state => state.auth.isAuth)
  const dispatch = useDispatch();
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
