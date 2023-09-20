import { Analytics } from '@vercel/analytics/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { GlobalStateProvider } from '../context/global-context';
import Header from '../components/header/header.component';
import '../app/globals.css'
import Footer from '../components/footer/footer.component';

export default function MyApp({ Component, pageProps  }) {

    const router = useRouter();

    // Scroll to top once exit animation complete
    function handleExitComplete() {
        window.scrollTo({ top: 0 })
    }
   
  return (
        <>
        <GlobalStateProvider>
        <Header />
          <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
              <motion.div
                    key={router.route}
                    initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -50, opacity: 0 }}
                      transition={{
                        delay: 0.2,
                        type: "tween",
                        duration: 0.3
                      }}
                      >
                  <div className='page__container page__container--main'>
                    <Component {...pageProps} />
                </div>
              </motion.div>
          </AnimatePresence>
          <Footer />
          <Analytics />
        </GlobalStateProvider>
        </>
  );
  }