import express from 'express'
const router = express.Router()



// Routes
router.get('/', (req,res)=>{
    res.send('Hello')
})

module.exports = router