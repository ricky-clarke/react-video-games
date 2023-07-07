'use client'
import '../../globals.css';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children  }) => {

  const pathname = usePathname();

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={pathname}
        className="page__container"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
            delay: 0.5,
            duration: 0.5,
            type: 'spring',
            stiffness: 100
        }}>
         {children}
      </motion.div>
    </AnimatePresence>

  );
};

export default Layout;
