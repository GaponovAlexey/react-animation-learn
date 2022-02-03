import { css, keyframes } from '@emotion/css'
import './App.css'
import logo from './logo.svg'
import { bounce, bounceOut } from 'react-animations'

function App() {
  const bounceAnimation = keyframes`${bounce}${bounceOut}`;

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <div
          className={css`
            animation: ${bounceAnimation} 1s ease infinite;
          `}
        >
          Learn React
        </div>
      </header>
    </div>
  )
}

export default App
