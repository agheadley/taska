import { SvelteKitAuth } from "@auth/sveltekit" 
import {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET,AUTH_SECRET} from "$env/static/private" 
import Google from "@auth/core/providers/google"; 

//export const handle = SvelteKitAuth({ providers: [Google({ clientId: GOOGLE_CLIENT_ID, clientSecret: GOOGLE_CLIENT_SECRET })] });


/* https://github.com/nextauthjs/next-auth/issues/9436 */
/* is adding the AUTH_SECRET safe? */
export const handle = SvelteKitAuth({ 
    providers: [Google({ clientId: GOOGLE_CLIENT_ID, clientSecret: GOOGLE_CLIENT_SECRET })] ,
    trustHost: true,
    secret: AUTH_SECRET
});

