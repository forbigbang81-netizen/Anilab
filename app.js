import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AuthLanding from './components/AuthLanding';
import Onboarding from './components/Onboarding';
import Dashboard from './components/Dashboard';

export default function App() {
  const [stage, setStage] = useState('auth'); // stages: auth, onboarding, main

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen font-sans selection:bg-indigo-500/30">
      <AnimatePresence mode="wait">
        {stage === 'auth' && (
          <motion.div key="auth" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <AuthLanding onLogin={() => setStage('onboarding')} />
          </motion.div>
        )}

        {stage === 'onboarding' && (
          <motion.div key="onboarding" initial={{ x: 100 }} animate={{ x: 0 }} exit={{ opacity: 0 }}>
            <Onboarding onComplete={() => setStage('main')} />
          </motion.div>
        )}

        {stage === 'main' && (
          <motion.div key="main" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <Dashboard />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
