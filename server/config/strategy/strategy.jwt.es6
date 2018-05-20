import {findUserById} from "../../models/UserModel";
import {ExtractJwt, Strategy} from 'passport-jwt'
const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromHeader();
jwtOptions.secretOrKey = 'tasmanianDevil';

exports.jwtOptions = jwtOptions;

let strategy = new Strategy(jwtOptions, (jwt_payload, next) => {
    console.log('payload received', jwt_payload);
    // this is a database call:
    findUserById(jwt_payload.id).then((user) => {
        if (user) {
            next(null, user);
        } else {
            next(null, false);
        }
    }).catch((err) => {
        throw err;
    });

});


export default strategy;