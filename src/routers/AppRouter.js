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
              <Route path="https://kuoze.github.io/rps/about" element={ <AboutScreen /> } />
              <Route path="https://kuoze.github.io/rps/leaderboard" element={ <LeaderboardScreen /> } />
              <Route path="https://kuoze.github.io/rps/timeline" element={ <TimelineScreen /> } />
              <Route path="https://kuoze.github.io/rps/" element={ <HomeScreen /> } />
          </Routes>        
    </BrowserRouter>

  );
  
};
