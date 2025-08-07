import directives from './directives';
import { permissionOptions } from './permission';
import { start } from 'llqm-framework';
import Layout from '@/components/layout/index.vue';
import { i18n, appsData } from 'llqm-framework-sdk';

export default () => {
  start({
    defaultPage: '/app/demo',
    fullView: [/login\//],
    layout: Layout,
    i18n,
    permissionOptions,
    routes: appsData.routes,
    getLoginUser: async () => ({ user: 1 }),
    beforeLayoutMount: async () => {},
    beforeMount: ({ app }) => {
      app.use(directives);
    }
  });
};
