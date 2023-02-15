exports.logoutControl = async( req,res) => {
    req.session.destroy( (err) => {
        if(err)
        {
            console.log(err)
        }
        else
        {
            console.log('logged out successfully')
            res.redirect('/')
        }
    })
}