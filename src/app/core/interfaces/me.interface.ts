export interface MeResponse {
  id: string;
  accountExpired: boolean;
  accountLocked: boolean;
  customerId: number;
  dateCreated: string;
  email: string;
  enabled: boolean;
  lastUpdated: string;
  name: string;
  notificationsEnabled: boolean;
  passwordExpired: boolean;
  signupCredentialEmailSent: boolean;
  signupCredentialPushSent: boolean;
  signupEmailSent: boolean;
  signupFrom: string;
  termsAndConditionsAccepted: boolean;
  type: string;
  finerioCode: string;
  hasNewTerms: boolean;
}
