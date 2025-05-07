
import { mainCreateUser } from "../create-user.js";


export const createUser = async (username: string, password: string) => {
  console.log('create user triggered!!');
  mainCreateUser(username, password).then(async (res) => {
    console.log('response received from the db')
  }).catch(err => {
    console.log('error received while trying to save data in the backend', err)
  })

}
