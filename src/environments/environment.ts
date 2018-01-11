// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
   apiKey: "AIzaSyCmrjXBaHMvpqWWCWSMrck7rBUN9frC1DQ",
    authDomain: "expense-tracker-portal.firebaseapp.com",
    databaseURL: "https://expense-tracker-portal.firebaseio.com",
    storageBucket: "expense-tracker-portal.appspot.com",
    messagingSenderId: "780495381532"
  }
};
