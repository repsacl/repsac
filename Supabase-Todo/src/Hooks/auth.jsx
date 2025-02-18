// src/Hooks/auth.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import supabase from '../../supabase-client';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Sjekk om det allerede finnes en aktiv session ved initialisering
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session?.user ?? null);
    });

    // Lytt etter endringer i autentiseringstilstanden
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ session, setSession }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};