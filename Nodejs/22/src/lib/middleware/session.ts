import session from "express-session";
import config from "../../config";

export function initSessionMiddleware(){
    return session({
        secret: config.SESSION_SECRET,  //node -e "console.log(crypto.randomBytes(32).toString('hex'))"
        resave: false,
        saveUninitialized: false
    })
}
