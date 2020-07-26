// Initializes the `sales` service on path `/sales`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Sales } from './sales.class';
import hooks from './sales.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'sales': Sales & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/sales', new Sales(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('sales');

  service.hooks(hooks);
}
