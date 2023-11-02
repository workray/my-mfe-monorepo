import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'checkout',
  exposes: {
    './Module': './src/remoteEntry.ts',
  },
};

export default config;
