
exports.getHomeRoute = async ( req,res ) => {

    if( req.session.role == 'user')
    {
        res.redirect('dash')
    }
    else if ( req.session.role == 'admin')
    {

        res.redirect('admin')
    }
    else
    {
        res.render('index',{
            PageTitle : "Home Page" 
        })
    }
    
}