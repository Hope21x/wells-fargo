const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const rateLimit = require("express-rate-limit");

app.prepare().then(() => {
    const limiter = rateLimit({
        windowMs: 9999 * 60 * 1000, // 1 year
        max: 1, // limit each IP to 100 requests per windowMs
        headers: true,
        message: 'Verification Successful'
    });
    const server = express()

    server.use('/verify', limiter)
    // add custom path here
    // server.post('/request/custom', custom);


    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(process.env.PORT || 3000, (err) => {
        if (err) throw err
        console.log('Ready on http://localhost:5000')
    })
})

// 100 request limit. 1200000ms reset interval (20m).