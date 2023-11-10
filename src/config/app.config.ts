interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Individual Customer'],
  tenantRoles: ['Business Owner', 'Store Manager', 'Store Employee', 'Customer Service Representative'],
  tenantName: 'Company',
  applicationName: 'Construction tool rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage your user information', 'View company information'],
  ownerAbilities: [
    'Manage company information',
    'Manage user information',
    'Create, read, edit, and delete company records',
    'Create, read, edit, and delete user records',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/fca34624-5a52-4d5e-837f-2b8ded0a92b2',
};
