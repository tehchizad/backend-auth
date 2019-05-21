// Express routing init
const express = require('express')
const app = express()

// Imported routes
const authRoutes = require('./routes/auth')

const PORT = 5150

app.use('/api/user', authRoutes)

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

readQuotes()

// Default listener
app.listen(PORT, () => console.log(`Serving on port ${PORT}`))
