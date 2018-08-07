'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const Database = use('Database')

class UserSeeder {
  async run () {
    
    const users = await Factory
      .model('App/Models/User')
      .createMany(5)
    
    console.log(users)
    
  }
}

module.exports = UserSeeder
