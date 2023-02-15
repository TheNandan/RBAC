const bcrypt = require('bcrypt')
const user = require('../models/model')

exports.getSigninRoute = async( req,res ) => {
    if( req.session.role == 'user')
    {
        res.redirect('dash')
    }
    else if( req.session.role == 'admin')
    {
        res.redirect('admin')
        
    } else{
        res.render('signin',{
            PageTitle : 'Sign In'
        })
    }   
}

exports.postSigninRoute = async( req,res ) => {
    const {email,password} = req.body

    if ( email == '' || password == '')
    {
        console.log('Input fields cannot be empty')
    }
    else
    {
        const isEmail = await user.findOne({email:email})
        
        if( !isEmail)
        {
            console.log('User Does not exist Please Sign Up first')
        }
        else
        {
            const isMatch = await bcrypt.compareSync(password,isEmail.password)

            if(!isMatch)
            {
                console.log('password did not match')
            }
            else
            {
                console.log('logged in')
                const sess = req.session
                sess.username = isEmail.username
                sess.email = isEmail.email
                sess.role = isEmail.role

                if ( req.session.email)
                {
                    if( req.session.role == 'user')
                    {
                        res.render('dash',{
                        PageTitle:'Dashboard',
                        userDetails : isEmail})

                    }
                    else
                    {
                        const allUser = await user.find({role:'user'})
                        res.render('admin',{
                            PageTitle:'Admin',
                            allusers:allUser
                        })
                    }
                }
                else
                {
                    res.redirect('/')
                }

                
                
            } 
        }
    }
}
