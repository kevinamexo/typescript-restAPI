import {DocumentDefinition} from 'mongoose'
import UserModel, { UserDocument } from '../models/user.model'

export async function(input: DocumentDefinition<UserDocument>){
    try {
        await UserModel.create(input)
    } catch (error) {
        
    }
}