import Counter from './components/Counter';
import { Provider } from 'react-redux'
import { store } from './Redux/store';
import Header from './components/Header'
import Auth from './components/Auth'
import { useSelector, useDispatch } from 'react-redux'
import UserProfile from './components/UserProfile'
function App() {
  const isAuth = useSelector(state => state.auth.isAuth)
  return (
    <>
      <Header />
      {!isAuth ? <Auth /> : <UserProfile />}
      <Counter />
    </>

  );
}

export default App;
