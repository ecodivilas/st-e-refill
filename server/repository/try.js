const bcrypt = require('bcryptjs')

async compare() { 
    const result = await bcrypt.compare("sonic",
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNvbmljIiwiaWF0IjoxNjgyMjY4NDkyLCJleHAiOjE2ODIyNzIwOTJ9.nuxidzrohvEfb2vQEOwExZdmo4in56CX21MZWAW95LY")
return result
}


console.log(result)
