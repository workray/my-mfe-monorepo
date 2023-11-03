import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'app-shell',
  remotes: ['catalog', 'checkout', 'store'],
};

export default config;
