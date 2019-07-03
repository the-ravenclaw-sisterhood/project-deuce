// let hashPass = require('hashPass');
// let uuidv1 = require('uuid/v1');
// let users = require('../models/user')

// let user = {
//     createCompany: function (request, response) {
//         if (!request.body.email.includes('@') || !request.body.email.includes('.')) {
//             response.status(400).json({
//                 'error': 'email is not valid'
//             });
//         } else if (request.body.password !== request.body.password_confirm) {
//             response.status(400).json({
//                 'error': 'passwords do not match'
//             });
//         } else {
//             let hashedPassword = hashPass(request.body.password);
//             let userRequest = {
//                 email: request.body.email,
//                 password: hashedPassword.hash,
//                 salt: hashedPassword.salt
//             };
//             users.insertNewCompany(userRequest, function (error, result) {
//                 if (error) {
//                     console.log(error);
//                     if (error.sqlMessage.includes('Duplicate')) {
//                         response.status(400).json({
//                             'error': 'email already exists in system'
//                         });
//                     } else {
//                         response.status(500).json({
//                             'error': 'oops we did something bad'
//                         });
//                     }
//                 } else {
//                     response.json({
//                         user_id: result.insertId,
//                         email: userRequest.email
//                     });
//                 }
//             });
//         }
//         console.log("company was created");
//     },
//     createInfluencer: function (request, response) {
//         if (!request.body.email.includes('@') || !request.body.email.includes('.')) {
//             response.status(400).json({
//                 'error': 'email is not valid'
//             });
//         } else {
//             let hashedPassword = hashPass(request.body.password);
//             let userRequest = {
//                 first_name: request.body.first_name,
//                 last_name: request.body.last_name,
//                 email: request.body.email,
//                 followers: request.body.followers,
//                 price: request.body.price,
//                 password: hashedPassword.hash,
//                 salt: hashedPassword.salt
//             };
//             users.insertNewInfluencer(userRequest, function (error, result) {
//                 if (error) {
//                     console.log(error);
//                     if (error.sqlMessage.includes('Duplicate')) {
//                         response.status(400).json({
//                             'error': 'email already exists in system'
//                         });
//                     } else {
//                         response.status(500).json({
//                             'error': 'oops we did something bad'
//                         });
//                     }
//                 } else {
//                     response.json({
//                         user_id: result.insertId,
//                         email: userRequest.email
//                     });
//                 }
//             });
//         }
//         console.log("influencer was created")
//     },
//     loginCompany: function (request, response) {
//         users.selectByCompanyEmail(request.body.email, function (error, result) {
//             if (error) {
//                 console.log(error);
//                 response.status(500).json({
//                     'error': 'oops we did something bad'
//                 });
//             } else if (!result.length) {
//                 response.status(404).json({
//                     'error': 'user not found'
//                 });
//             } else {
//                 user = result[0];
//                 loginAttempt = hashPass(request.body.password, user.salt);
//                 if (loginAttempt.hash === user.password) {
//                     let uuid = uuidv1();
//                     users.updateSession(user.email, uuid, function (error, result) {
//                         delete user.password;
//                         delete user.salt;
//                         delete user.session;
//                         response.header('x-session-token', uuid).json(user);
//                     });
//                 } else {
//                     response.status(401).json({
//                         'error': 'improper login credentials'
//                     });
//                 }
//             }
//         });
//         console.log("company was logged in");
//     },
//     loginInfluencer: function (request, response) {
//         users.selectByInfluencerEmail(request.body.email, function (error, result) {
//             if (error) {
//                 console.log(error);
//                 response.status(500).json({
//                     'error': 'oops we did something bad'
//                 });
//             } else if (!result.length) {
//                 response.status(404).json({
//                     'error': 'user not found'
//                 });
//             } else {
//                 user = result[0];
//                 loginAttempt = hashPass(request.body.password, user.salt);
//                 if (loginAttempt.hash === user.password) {
//                     let uuid = uuidv1();
//                     users.updateSession(user.email, uuid, function (error, result) {
//                         delete user.password;
//                         delete user.salt;
//                         delete user.session;
//                         response.header('x-session-token', uuid).json(user);
//                     });
//                 } else {
//                     response.status(401).json({
//                         'error': 'improper login credentials'
//                     });
//                 }
//             }
//         });
//         console.log("influencer logged in");
//     },
//     logout: function (request, response) {
//         users.removeSession(request.headers['x-session-token'], function (error, result) {
//             response.json({
//                 'message': 'user logged out successfully'
//             });
//         });
//     },
//     getCompany: function (request, response) {
//         users.getCompany(request.headers['x-session-token'], function (error, result) {
//             response.json(result[0]);
//         });
//     },
//     getInfluencer: function (request, response) {
//         users.getInfluencer(request.headers['x-session-token'], function (error, result) {
//             response.json(result[0]);
//         });
//     },
//     getCompanyID: function (request, response) {
//         users.getCompanyID(request.params.id, function (error, result) {
//             if (result.length) {
//                 response.json(result[0]);
//             } else {
//                 response.status(404).json({
//                     'error': 'user not found'
//                 });
//             }
//         });
//     },
//     getInfluencerID: function (request, response) {
//         users.getInfluencerID(request.params.id, function (error, result) {
//             if (result.length) {
//                 response.json(result[0]);
//             } else {
//                 response.status(404).json({
//                     'error': 'user not found'
//                 });
//             }
//         });
//     },
// };

// module.exports = user;