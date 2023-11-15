import { Routes, Route } from 'react-router-dom'
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import Domain from './components/Domain';
import WebHosting from './components/WebHosting';
import Server from './components/Server';
import ProtectedRoute from './components/ProtectedRoute'
import Notfound from './components/Notfound';
import './App.css';

const App = () =>  (
      <div className='container'>
        <div className='app-container'>
          <Routes>
            <Route path="/sign-up" element={<SignUp />} />
            <Route  path="/login" element={<Login />} />
            <Route path="/" element={
              <ProtectedRoute>
                  <Home />
              </ProtectedRoute>
            } />
            <Route path="/domain" element={
              <ProtectedRoute>
                <Domain />
              </ProtectedRoute>
            } />
            <Route path="/server" element={
              <ProtectedRoute>
                <Server />
              </ProtectedRoute>
            } />
            <Route path="/web-hosting" element={
              <ProtectedRoute>
                <WebHosting />
              </ProtectedRoute>
            } />
        <Route path="*" element={<Notfound />} />
      </Routes>
        </div>
      </div>
  )


export default App;
