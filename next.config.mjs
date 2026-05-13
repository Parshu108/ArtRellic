/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-bg)",
        secondary: "var(--secondary-color)",
        highlight: "var(--highlight-color)",
        card: "var(--card-bg)",
        muted: "var(--text-muted)",
        borderCustom: "var(--border-color)",
      },
    },
  },
};

export default nextConfig;
