//import logo from './logo.svg';
import './App.css';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProfiles } from './redux/slices/profiles'

function App() {
  const dispatch = useDispatch()
  const { profiles }=useSelector(state => state.profiles)

  const isProfilesLoading = profiles.status === 'loading'

  React.useEffect(() => {
    dispatch(fetchProfiles())
  }, [])

  console.log(profiles)

  return (
    <div>
      Текст
    </div>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
