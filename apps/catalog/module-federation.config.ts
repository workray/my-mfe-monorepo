import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'catalog',
  exposes: {
    './Module': './src/remoteEntry.ts',
  },
};

export default config;
