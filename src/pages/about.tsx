import React from 'react';
import PageContainer from '@/app/components/PageContainer';
import NavBar from '@/app/components/NavBar';
import '@/app/globals.css';

export default function AboutPage() {
  return (
    <PageContainer>
      <NavBar />
      <div>
        <h1>About</h1>
        <p>This is the about page.</p>
      </div>
    </PageContainer>
  );
}
