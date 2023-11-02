import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'catalog',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
