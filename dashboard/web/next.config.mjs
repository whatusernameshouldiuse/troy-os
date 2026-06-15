import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Home dir is itself a git repo with a lockfile; pin tracing to this app
  // so Vercel/Next don't try to trace the entire home directory.
  outputFileTracingRoot: __dirname,
};
export default nextConfig;
