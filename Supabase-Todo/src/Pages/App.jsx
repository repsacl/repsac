import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

import supabase from '../../supabase-client'

import ToDo from '../Components/ToDo'

import '../App.css'

import { useAuth } from '../Hooks/auth'

function App() {
  const session = useAuth();

  return (
    <>
    {session ? <ToDo /> : <Navigate to="/login"/> }
    </>
  )
}

export default App;
