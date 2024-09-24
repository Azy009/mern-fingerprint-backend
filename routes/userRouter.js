
const express = require('express')
const createuser = require('../Controllers/User/createuser');
const singleuser = require('../Controllers/User/singleuser');
const userlist = require('../Controllers/User/userlist');
const deleteuser = require('../Controllers/User/deleteuser');
const router = express.Router()
router.get('/userlist',userlist)
router.get('/:id',singleuser)
router.post('/createuser',createuser)
router.delete('/:id',deleteuser)

module.exports = router
