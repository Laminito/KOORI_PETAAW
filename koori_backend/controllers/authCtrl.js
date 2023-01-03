//importing modules

const bcrypt = require("bcrypt");
const db = require("../models");
const passwordgenerator = require("../middleware/password_generator");
const jwt = require("jsonwebtoken");
const models = require("../models");

//signing a user up
//hashing users password before its saved to the database with bcrypt
const signup = async(req, res) => {
    try {
        const {
            roles,
            nomComplet,
            email,
            profession,
            service,
            direction,
            departement,
            avatar,
            password = passwordgenerator.password
        } = req.body;

        const data = {
            roles,
            nomComplet,
            email,
            profession,
            service,
            direction,
            departement,
            avatar,
            password: await bcrypt.hash(password, 10)
        };

        const user = await db.User.create(data);
        if (user) {
            let currentUser
            models.User.findAll({
                attributes: ['id', 'email']
            }).then((users) => {
                let userId
                users.forEach(users => {
                    if (users.email === user.email) {
                        userId = users.dataValues.id;
                        // console.log("userId", userId, "\n", "email", user.email);
                    }
                    return userId
                })
                currentUser = userId
                console.log("userNow1", currentUser);
                let token = jwt.sign({ id: currentUser }, process.env.secretKey, {
                    algorithm: "HS256",
                    expiresIn: process.env.jwtExpirySeconds,
                });
                res.cookie("jwt", token, { maxAge: process.env.jwtExpirySeconds * 1000, httpOnly: true });
                return res.json({
                    success: 1,
                    message: "register is successfully",
                    token: token,
                    userID: currentUser
                });
            })
        } else {
            return res.status(401).send("Connexion refusée");
        }
    } catch (error) {
        console.log(error);
    }
};


//login authentication

const login = async(req, res) => {
    try {
        const { email, password } = req.body;

        //find a user by their email
        const user = await db.User.findOne({
            where: {
                email: req.body.email
            },
        });

        //if user email is found, compare password with bcrypt
        if (user) {
            const isSame = await bcrypt.compare(password, user.password);
            if (isSame) {
                let currentUser
                models.User.findAll({
                    attributes: ['id', 'email']
                }).then((users) => {
                    let userId
                    users.forEach(users => {
                        if (users.email === user.email) {
                            userId = users.dataValues.id;
                        }
                        return userId
                    })
                    currentUser = userId
                    let token = jwt.sign({ id: currentUser }, process.env.secretKey, {
                        algorithm: "HS256",
                        expiresIn: process.env.jwtExpirySeconds,
                    });
                    res.cookie("jwt", token, { maxAge: process.env.jwtExpirySeconds * 1000, httpOnly: true });
                    return res.json({
                        success: 1,
                        message: "login successfully",
                        token: token,
                        userID: currentUser
                    });
                })


            } else {
                return res.status(401).send("Connexion refusée");
            }
        } else {
            return res.status(401).send("Authentication failed");
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    signup,
    login,
};