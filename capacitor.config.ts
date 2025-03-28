import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ferreteria.app',
  appName: 'FerreteriaMobileFrontend',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;