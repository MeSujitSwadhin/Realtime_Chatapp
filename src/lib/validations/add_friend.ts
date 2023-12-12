import {z} from 'zod'
//zod is allows the schemas that are validate user input

export const addFriendValidator = z.object ({
    email: z.string().email()
    // this will called a string and also a type of email
})

