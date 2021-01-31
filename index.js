const express = require('express')
const app = express()
const port = 8081
const { exec } = require('child_process')

function cding() {
    return exec("cd /opt/FacilContabilidad-API", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    }) 
}

function stopAPI() {
    return exec("pm2 stop api", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    }) 
}

function startAPI() {
    return exec("pm2 stop api", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    }) 
}

function gitPulling() {
    return exec("git pull", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    }) 
}

app.post('/', (req, res) => {
    console.log(req)
    cding()
    gitPulling()

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})