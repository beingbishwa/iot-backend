/**
 * UserController
 *
 * @description :: Server-side actions for handling user related incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 * @author      :: https://github.com/beingbishwa
 */

module.exports = {
  /**
   * `UserController.create()`
   */
  create: async function(req, res) {
    const allowedParameters = ["name", "email", "password", "user_level"]
    // pick required fields
    const data = _.pick(req.body, allowedParameters)
    try{
      const user = await User.create(data).fetch()
      return ResponseService.json(201, res, 'User created successfully', user)
    }catch(err){
      return res.json(err)
    }
  },

  /**
   * `UserController.findOne()`
   */
  findOne: async function (req, res) {
    // get id
    const id = req.params.id
    if(!id){
      return ResponseService.json(400, res, 'Missing parameter: id')
    }
    // find user
    try {
      const user = await User.findOne({id})
      console.log(user)
      if(!user){
        return ResponseService.json(404, res, 'User not found')
      }
      return ResponseService.json(200, res, 'User found successfully', user)
    } catch (error) {
      return res.json(err)
    }
  },

  /**
   * `UserController.findAll()`
   */
  findAll: async function (req, res) {
    try {
      const users = await User.find()
      if(!users){
        return ResponseService.json(404, res, 'No user exists')
      }
      return ResponseService.json(200, res, 'Users found successfully', users)
    } catch (error) {
      return res.json(err)
    }
  },

  /**
   * `UserController.update()`
   */
  update: async function (req, res) {
    
  },

  /**
   * `UserController.delete()`
   */
  delete: async function (req, res) {
    
  },
  
  test: (req, res) => {
    return ResponseService.json(200, res, 'Data created succcessfully', {
        name: "bishwa",
        email: "bispoul181@gmail.com",
        password: "123abc"
    })
  }

};
