
exports.get404Route = async ( req,res ) => {
    res.render('404',{
        PageTitle:"404"
    })
}