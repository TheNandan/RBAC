
exports.getHomeRoute = async ( req,res ) => {

    let role = req.session.role
    let email = req.session.email
    let username = req.session.username

        res.render('index',{
            PageTitle : "Home" ,
            role:role,
            email:email,
            username:username
        })

}