const router = require('express').Router()

router.get('/register', (req, res) => {
  res.send('Registration')
})

router.get('/login', (req, res) => {
  res.send('Login')
})

module.exports = router
