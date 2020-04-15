import { IConfig } from 'umi-types';

const config: IConfig = {
  plugins: [
    ['umi-plugin-block-dev', {}],
    [
      'umi-plugin-react',
      {
        dva: true,
        antd: true,
      },
    ],
  ],
}

export default config;
