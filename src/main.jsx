import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Full from './context/store'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Full>
<App />
</Full>
   
  
  </React.StrictMode>
)
