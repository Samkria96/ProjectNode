export class UserController 
{
    static login (req,res,next:any)
    {
        const error = new Error('user does not exist')
        next(error)
        res.send(req.query)
    }
   
}

