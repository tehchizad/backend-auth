// Express routing init
const express = require('express')
const app = express()

// Imported routes
const authRoutes = require('./routes/auth')

const PORT = 5150

app.use(express.json())
app.use('/api/user', authRoutes)

// Default listener
app.listen(PORT, () => console.log(`Serving on port ${PORT}`))
