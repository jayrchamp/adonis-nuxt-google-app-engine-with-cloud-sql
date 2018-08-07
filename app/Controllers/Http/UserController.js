'use strict'

const Database = use('Database')

class UserController {
    async show() {
        try {
            const users = await Database.table('users')
            return users
        }
        catch(err) {
            return err
        }
    }
}

module.exports = UserController
