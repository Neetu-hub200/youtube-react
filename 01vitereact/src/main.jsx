import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom Vite</h1>
    </div>
  )
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
    },
    children: 'Click me to go to Google',
}

const anotherElement = (
  <a href="https://www.example.com" target="_blank">
    Visit Google(29.40)
  </a>
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
    <App />
    {anotherElement}
  </StrictMode>,
)
