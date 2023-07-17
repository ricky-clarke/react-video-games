import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { GlobalStateProvider } from '../context/global-context';
import Header from '../components/header/header.component';
// import Footer from '../components/footer/footer.component';
import '../app/globals.css'

export default function MyApp({ Component, pageProps }) {

    const router = useRouter();
   
  return (
        <>
        <GlobalStateProvider>
        <Header />
          <AnimatePresence mode='wait'>
              <motion.div
                    key={router.route}
                    initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -50, opacity: 0 }}
                      transition={{
                        delay: 0.1,
                        type: "tween",
                        duration: 0.2
                      }}
                      >
                  <div className='page__container'>
                    <Component {...pageProps} />
                </div>
              </motion.div>
          </AnimatePresence>
        {/* <Footer /> */}
        </GlobalStateProvider>
        </>
  );
  }