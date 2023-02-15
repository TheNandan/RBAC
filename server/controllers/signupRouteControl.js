const user = require('../models/model')
const bcrypt = require('bcrypt')


exports.getSignupRoute = async( req,res ) => {
    if ( req.session.role == 'user')
    {
        res.redirect('dash')
    }
    else if ( req.session.role == 'admin')
    {
        res.redirect('admin')
    }
    else
    {
        res.render('signup',{
            PageTitle:"Sign Up Page"
        })
    }
}

exports.postSignupRoute = async( req,res ) => {
    const { username , email , password , cpassword } = req.body
    
    if ( username == '' || email == '' || password == '' || cpassword == '')
    {
        console.log('input fields cannot be empty')
        res.redirect('signup')
    }
    else
    {
            if ( password == cpassword)
            {
                const isEmail = await user.findOne({email:email})

                if( isEmail )
                {
                    console.log('user exist')
                    res.redirect('signin')
            }
            else
            {
                const regEmail = /@admin.com/i
                const isAdmin = regEmail.test(email)

                if ( !isAdmin)
                {
                    const hashedpassword = bcrypt.hashSync(password,12)
                    const newUser = await new user({
                        username : username,
                        email : email,
                        password : hashedpassword
                    })

                    newUser.save().then(
                        console.log('saved user successfully')
                    )

                    res.redirect('signin')

                }
                else
                {
                    const hashedpassword = bcrypt.hashSync(password,12)
                    const newUser = await new user({
                        username : username,
                        email : email,
                        role : 'admin',
                        password : hashedpassword
                    })

                    newUser.save().then(
                        console.log('saved user successfully')
                    )

                    res.redirect('signin')
                }

            }
        }
        else
        {
            console.log('password does not match')
            res.redirect('signup')
        }
        
    }
    
  
}

