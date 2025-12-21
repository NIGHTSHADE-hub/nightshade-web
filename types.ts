import React from 'react';

export interface Path {
  id: string;
  title: string; // e.g., "AI Alchemist"
  icon: React.ReactNode;
  description: string;
  skills: string[];
}

export interface Artifact {
  id: string;
  title: string;
  category: 'Living Demo' | 'Research' | 'System';
  status: 'Deployed' | 'In Development' | 'Failed Experiment';
  description: string;
}

export interface ProphecyItem {
  era: string;
  title: string;
  description: string;
  status: 'Fulfilled' | 'In Progress' | 'Prophesied';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}