// Syteme
import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// Pages
import Home from './pages/home/home-page'
import ErrorPage from './pages/error-page/error-page'
import Page1 from './pages/page1/page1'
// Compoments
import Header from './components/header/header'
import Footer from './components/footer/footer'
import ClientForm from './components/ClientForm'
import FreelanceForm from './components/FreelanceForm'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/page1" element={<Page1 />}>
          {/* Nous imbriquons nos composants dans page1 */}
          <Route path="client" element={<ClientForm />} />
          <Route path="freelance" element={<FreelanceForm />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
