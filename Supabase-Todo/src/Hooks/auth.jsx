import { useEffect, useState } from 'react';
import supabase from '../../supabase-client';

export const useAuth = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setSession(user);
      console.log(user);
    }
    fetchUser();
  }, []);

  return session;
};