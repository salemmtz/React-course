import React from 'react';
import { JournalPage } from '../pages/JournalPage';
import { Navigate, Routes, Route } from 'react-router-dom';

export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<JournalPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
