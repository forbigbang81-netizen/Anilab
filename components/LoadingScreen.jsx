import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from '../components/LoadingScreen';
import Hero from '../components/Hero';
import MovieGrid from '../components/MovieGrid';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a professional data fetch
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black text-white selection:bg-brand-red">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" />
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Hero />
            <div className="px-8 py-12">
              <h2 className="mb-8 text-2xl font-semibold">Recommended for You</h2>
              <MovieGrid />
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
