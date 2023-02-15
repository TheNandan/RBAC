const router = require('express').Router()
const controller = require('../controllers/controller')

router.get('/',controller.homeRoute.getHomeRoute)
router.get('/signup',controller.signupRoute.getSignupRoute)
router.get('/signin',controller.signinRoute.getSigninRoute)
router.get('/dash',controller.dashRoute.getDashRoute)
router.get('/logout',controller.logoutRoute.logoutControl)
router.get('/admin',controller.adminRoute.getadminRoute)

router.post('/signup',controller.signupRoute.postSignupRoute)
router.post('/signin',controller.signinRoute.postSigninRoute)

router.get('*',controller.x404Route.get404Route)

module.exports = router