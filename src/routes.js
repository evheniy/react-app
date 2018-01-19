import DynamicComponent from 'wpb/lib/dynamic';
import Placeholder from './modules/layout/components/placeholder';

const routes = [{
  path: '/',
  exact: true,
  component: DynamicComponent(import('./modules/home'), Placeholder),
}, {
  path: '/actions',
  exact: true,
  component: DynamicComponent(import('./modules/actions'), Placeholder),
}];

export default routes;
