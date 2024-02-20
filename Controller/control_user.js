import User from "../Model/model_user.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

async function signup (req, res) {
    try {
            console.log(('oui'))
            let {username, password,type} = req.body 
            let user = await User.create({username, password,type});
            console.log(user)
            res.status(200).json({message: "User créé"});
        } catch (err) {
            res.status(400).json({ message: "Erreur pendant inscription" , err});
        }
    }


async function login (req, res) {
        try {
            let user = await User.findOne({ username: req.body.username });
            if (user) {
                let isMatch = await bcrypt.compare(
                    req.body.password,
                    user.password
                );
    
                if (isMatch) {
                    
                    let token = jwt.sign({ id: user.id }, 'RANDOM_TOKEN_SECRET', {expiresIn:'24h'});
                    res.status(200).json({ token, username: user.username, type : user.type })
                    req.headers.payload = user.type;
                    //next()
                } else {
                    res.status(400).json({ message: "Invalid mot de pass" });
                }
            } else res.status(400).json({ message: "User n'éxiste pas" });
        } catch (err) {
            res.status(400).json({ message: "Erreur pendant inscription" });
        }
    }

    async function isLoggedInDZ (req, res, next) {  
        try {
          if (!req.headers.authorization) throw 'no token'
          let token = req.headers.authorization.replace('Bearer ', '');
          const secret_key = 'RANDOM_TOKEN_SECRET';
          jwt.verify(token, secret_key, (err, payload) => { 
             if (err) {
              res.status(401).send({ message: 'Unhauthorized' });
            } else {
              next();
            }
          });
        } catch (err) {
          res.status(400).send(err);
        }
        
      };

      async function isLoggedInFR (req, res, next) {  
        try {
            console.log('tedkhol')
          if (!req.headers.authorization) throw 'no token'
          console.log('tedkhol2')
          let token = req.headers.authorization.replace('Bearer ', '');
          console.log('tedkhol3')
          const secret_key = 'RANDOM_TOKEN_SECRET';
          console.log('tedkhol333')
            console.log(req.headers.payload)
          console.log('tedkhol4')
          jwt.verify(token, secret_key, (err, payload) => {
            if (err) {
              res.status(401).send({ message: 'Unhauthorized' });
            } else {
              next();
            }
          });
        } catch (err) {
          res.status(400).send(err);
        }
        
      };

    export {signup, login, isLoggedInDZ, isLoggedInFR}