"use server";

import { unstable_noStore as noStore } from 'next/cache';

export async function getServerEnv() {
  // Ensure environment variables are accessed at runtime, not build time
  noStore();

  return {
    GROQ_API_KEY: process.env.GROQ_API_KEY,
    // Add other server-only environment variables here
  };
} 