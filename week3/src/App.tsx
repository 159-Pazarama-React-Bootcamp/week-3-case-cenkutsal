import React from 'react';
import './App.css';
import Landing from './landing/Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './register/Register';
import Login from './login/Login';
import Dashboard from './dashboard/Dashboard';
import PrivateRoute from './core/private-route/PrivateRoute';

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/dashboard"
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: '1rem' }}>
                                <p>There&apos;s nothing here!</p>
                            </main>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
