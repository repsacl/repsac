// src/Pages/App.jsx
import { Navigate } from 'react-router-dom';
import ToDo from '../Components/ToDo';
import { useAuth } from '../Hooks/auth';

import "../App.css"

function App() {
  const { session } = useAuth();

  return (
    <>
      {session ? <ToDo /> : <Navigate to="/login" replace />}
    </>
  );
}

export default App;