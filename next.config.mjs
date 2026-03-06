import { defineConfig } from 'next/config';

export default defineConfig({
  reactStrictMode: true,
  images: {
    domains: ['your-image-domain.com'],
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
  },
  experimental: {
    appDir: true,
  },
});