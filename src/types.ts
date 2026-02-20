import React from 'react';

export interface SongConcept {
  title: string;
  genre: string;
  mood: string;
  tempo: string;
  lyrics: string[];
  chords: string[];
  description: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}