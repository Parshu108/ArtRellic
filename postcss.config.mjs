const config = {
  plugins: {
    "@tailwindcss/postcss": {
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
    },
  },
};

export default config;
