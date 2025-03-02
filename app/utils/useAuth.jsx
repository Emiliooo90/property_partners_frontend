import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/Login');
    }
  }, [isAuthenticated, router]);

  return isAuthenticated;
}
