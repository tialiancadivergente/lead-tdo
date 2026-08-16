"use client";

import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/tdo/v1/h1/1/t');
  return null;
} 