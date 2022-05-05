const passport =require("passport")
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
        done(null, user);
});

passport.use(new GoogleStrategy({
        clientID:"810793553100-aaeeva1kduams4r56fbo0vdu3d9d735f.apps.googleusercontent.com",
        clientSecret:"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",
        callbackURL: "http://localhost:9111/google/callback",
        passReqToCallback   : true
    },
    function(request, accessToken, refreshToken, profile, done) {
            return done(null, profile);
    }
));

module.exports = passport;