const homeRoute = require('./homeRouteControl')
const signupRoute = require('./signupRouteControl')
const signinRoute = require('./signinRouteControl')
const dashRoute = require('./dashRouteControl')
const x404Route = require('./404RouteControl')
const logoutRoute = require('./logoutControl')
const adminRoute = require('./adminRouteControl')

module.exports = {
    homeRoute,
    signupRoute,
    signinRoute,
    dashRoute,
    x404Route,
    logoutRoute,
    adminRoute
}