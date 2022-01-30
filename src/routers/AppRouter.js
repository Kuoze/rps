import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Navbar } from '../components/ui/navbar/Navbar';
import { HomeScreen } from '../components/home/HomeScreen';
import { AboutScreen } from '../components/about/AboutScreen';
import { LeaderboardScreen } from '../components/leaderboard/LeaderboardScreen';
import { TimelineScreen } from '../components/timeline/TimelineScreen';

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
              <Route path="./about" element={ <AboutScreen /> } />
              <Route path="./leaderboard" element={ <LeaderboardScreen /> } />
              <Route path="./timeline" element={ <TimelineScreen /> } />
              <Route path="./" element={ <HomeScreen /> } />
          </Routes>        
    </BrowserRouter>

  );
  
};
