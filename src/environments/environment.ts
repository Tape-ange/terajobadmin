// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  debug: true,
  hrm: false,
  coreUrl: 'https://api-dev.terajob.com/api/v1',
  numVerify_url :' https://api.apilayer.com/number_verification/validate',
  numVerify_apikey : '3J24WNcRcITPAnzNrsBs3iKUCvN1jQjK',
  siret:'https://api.insee.fr/entreprises/sirene/V3/siret/',
  siret_key:'Bearer d2d3c9a7-81b0-3e0b-b3de-6dcd18b530cd',
  emailVerify_url: '/verify_email',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
