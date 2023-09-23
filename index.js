import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppProvider } from './Context'
import App from './App'
import Products from './Products'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <AppProvider>
            <Router>
                <Routes>
                    <Route exact path='/' element={<App />} />
                    <Route path='/products' element={<Products />} />
                </Routes>
                </Router>
        </AppProvider>
    </React.StrictMode>
)