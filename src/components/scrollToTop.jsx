
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const  { pathname  } = useLocation();
  
  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      //fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, [pathname]);
    return null;
};