import * as functions from 'firebase-functions';
import {getAuth} from 'firebase-admin/auth';

// noinspection JSUnusedGlobalSymbols
export const addCustomClaim = functions.auth.user().onCreate(async (user) => {
  if (user.email === 'admin@jocki.me') {
    console.log(`Allow-listing user ${user.email}`);
    await getAuth().setCustomUserClaims(user.uid, {invited: true});
  }
});
