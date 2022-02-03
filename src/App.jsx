// import { css,jsx, keyframes } from '@emotion/react'
import {  css, Global, ClassNames,keyframes } from '@emotion/react'
import './App.css'
import logo from './logo.svg'
import { bounceIn, bounceOut } from 'react-animations'

function App() {
  const bounceAnimation = keyframes`${bounceIn}${bounceOut}`

  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src={logo}
          className='App-logo'
          css={css`
            animation: ${bounceAnimation} 1s ease infinite;
          `}
          alt='logo'
        />
        <div
          css={css`
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
