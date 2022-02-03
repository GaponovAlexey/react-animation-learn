// import { css,jsx, keyframes } from '@emotion/react'
import { css, keyframes } from '@emotion/css'
import './App.css'
import logo from './logo.svg' 
import { bounce, merge, fadeInLeft } from 'react-animations'

function App() {
  const bounceAnimation2 = keyframes`${merge}${fadeInLeft}${bounce}`

  const bounceAnimation = keyframes`${fadeInLeft}`
  return (
    <div>
      <div className='App'>
        <header className='App-header'>
          <img
            src={logo}
            className={css`
              height: 40vmin;
              animation: ${bounceAnimation2} 2s infinite  alternate;
            `}
            alt='logo'
          />
          <div
            className={css`
              animation: ${bounceAnimation} 1s ease infinite;
            `}
          >
            Learn React
          </div>
        </header>
      </div>
    </div>
  )
}

export default App
