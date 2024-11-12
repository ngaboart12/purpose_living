import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.push('/login'); // Redirect to login if not authenticated
        } else {
          setLoading(false);
        }
      });

      return () => unsubscribe();
    }, [router]);

    if (loading) return <div className='w-full h-screen flex items-center justify-center'>Loading...</div>;

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
