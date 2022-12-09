import passport from "passport";

import passportGitHub2 from "passport-github2";
import { Request, RequestHandler} from "express";
import config from "../../config";

const githubStrategy = new passportGitHub2.Strategy(
    {
        clientID: config.GITHUB_CLIENT_ID,
        clientSecret: config.GITHUB_CLIENT_SECRET,
        callbackURL: config.GITHUB_CALLBACK_URL
    },
    function(
        accessToken: string,
        refreshToken: string,
        profile: {[key:string]: string},
        done: (error: null, user: Express.User) => void
    ){
        const user: Express.User= {
            username: profile.username,
        }

        done(null, user);
    }
)

passport.use(githubStrategy);

passport.serializeUser<Express.User>((user, done) => done(null, user)) //si salva l'utente nella session memory per poi farlo riloggare le volte sucessive

passport.deserializeUser<Express.User>((user,done) => done(null, user)) //pesca le info dell'utente dalla session per farlo riloggare nel momento in cui c'è la richiesta

const checkAuthorization: RequestHandler = (
    request, response, next
) => {
    if (request.isAuthenticated()){
        return next();
    }
    response.status(401).end();
}


export {passport, checkAuthorization}
