'use client'
import { useState } from 'react';
import TimeOut from './TimeOut';

export default function ClientDashboard() {
  const [showDash, setShowDash] = useState(true);
  const [showTimeout, setShowTimeout] = useState(false);

  return (
    <div>ClientDashboard</div>
  )
}
