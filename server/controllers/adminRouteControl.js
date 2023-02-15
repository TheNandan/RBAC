const user = require('../models/model')

exports.getadminRoute = async( req,res ) => {
    if ( req.session.role == 'admin')
    {
        const allUser = await user.find({role:'user'})
        res.render('admin',{
            PageTitle:'Admin Page',
            allusers:allUser
        })
    }
    else if( req.session.role == 'user')
    {
        res.redirect('dash')
    }
    else
    {
        res.redirect('404')
    }
}