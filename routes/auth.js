const router = require('express').Router()

// Firestore admin init
const admin = require('firebase-admin')
const serviceAccount = require('./.env/codettastone-auth.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()

function addQuote() {
  db.collection('quotes')
    .doc('learntocode')
    .create({
      quote: '#learntocode'
    })
    .then(() => console.log('Write successful'))
}

function readQuotes() {
  db.collection('quotes')
    .doc('hashtags')
    .get()
    .then(doc => {
      if (!doc.exists) {
        console.log('Document does not exist')
      }
      console.log('Complete:', doc._fieldsProto)
    })
    .catch(err => {
      console.log('Error:', err)
      process.exit()
    })
}

router.post('/register', (req, res) => {
  let user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }
  try {
    res.status(200).send(`${user.email} registered!`)
  } catch (err) {
    res.status(400).send(err)
  }
})

router.get('/login', (req, res) => {
  res.send('Login')
})

module.exports = router
