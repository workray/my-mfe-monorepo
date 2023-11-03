import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'recommendations',
  remotes: ['store'],
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
