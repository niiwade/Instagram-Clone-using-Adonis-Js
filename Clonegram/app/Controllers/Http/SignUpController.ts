import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {rules,schema} from '@ioc:Adonis/Core/Validator'

export default class SignUpController {

    // Validate input data 
    
    public async index({ request }: HttpContextContract) {
        const req = await request.validate({
            schema: schema.create({
                name: schema.string(),

                email: schema.string({}, [
                    rules.email(),
                ]),
                password: schema.string({}, [
                    rules.confirmed()
                ])
            })
        })
        
        console.log(req);
        return request.all()
    }
}
