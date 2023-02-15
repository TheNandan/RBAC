const user = require('../models/model')

exports.getDashRoute = async( req,res ) => {

    if ( req.session.role == 'user')
    {   
        const isEmail = await user.findOne({role:req.session.role})
        res.render('dash',{
            PageTitle:'Dashboard',
            userDetails : isEmail})
    }
    else if(req.session.role == 'admin')
    {
        res.redirect('admin')
    }
    else
    {
        res.redirect('404')
    }
    
}