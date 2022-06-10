import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, './') };

  return defineConfig({
    plugins: [react()],
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: require('./src/antd/vars.json'),
          javascriptEnabled: true,
        },
      },
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    server: {
      port: parseInt(process.env.VITE_APP_PORT) || 3000,
    },
  });
};
