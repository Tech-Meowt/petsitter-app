'use client';
import { useState, useEffect } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function idleTimer() {
  const supabase = createClientComponentClient();
  const timeout = 5000;
  const promptBeforeIdle = 3000;
  const [remaining, setRemaining] = useState(timeout);
  const [elapsed, setElapsed] = useState(0);
  const [lastActive, setLastActive] = useState(+new Date());

  const handleOnActive = () => {
    console.log('active');
  };

  const handleOnIdle = () => {
    console.log('idle');
  };

  const handlePrompt = () => {
    console.log('prompt');
  };

  const handleAction = () => {
    console.log('action');
  };

  const {
    reset,
    pause,
    resume,
    getRemainingTime,
    getLastActiveTime,
    getElapsedTime,
  } = useIdleTimer({
    timeout,
    promptBeforeIdle,
    throttle: 0.95 * timeout,
    onIdle: handleOnIdle,
    onActive: handleOnActive,
    onPrompt: handlePrompt,
    onAction: handleAction,
    crossTab: true,
    syncTimers: 500,
    emitOnAllTabs: true,
  });

  // const handleReset = () => reset();
  const handleReset = () => {
    reset();
    console.log('reset');
  };
  // const handlePause = () => pause();
  const handlePause = () => {
    pause();
    console.log('pause');
  };
  // const handleResume = () => resume();
  const handleResume = () => {
    resume();
    console.log('resume');
  };

  useEffect(() => {
    setRemaining(getRemainingTime());
    setLastActive(getLastActiveTime());
    setElapsed(getElapsedTime());

    setInterval(() => {
      setRemaining(getRemainingTime());
      setLastActive(getLastActiveTime());
      setElapsed(getElapsedTime());
    }, 1000);
  }, []);
}
