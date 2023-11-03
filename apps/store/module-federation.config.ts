import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'store',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
