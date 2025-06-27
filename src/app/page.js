'use client';
import Countdown from './components/Countdown';
import CommunityInfo from './components/CommunityInfo';
import './globals.css';

export default function HomePage() {
  return (
    <main className="main-container">
      <CommunityInfo />
      <Countdown />
    </main>
  );
}
