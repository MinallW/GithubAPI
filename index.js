const express = require('express')
const app = express()
const port = 8081
const { exec } = require('child_process')
let today = Date.now()

const commands = {
    cd: () => {
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
    },
    stopAPI: () => {
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
    },
    startAPI: () => {
        return exec("pm2 start api", (error, stdout, stderr) => {
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
    },
    gitAdd: () => {
        return exec("git add .", (error, stdout, stderr) => {
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
    },
    gitCommit: () => {
        return exec(`git commit -m ${today}`, (error, stdout, stderr) => {
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
    },
    gitPulling: () => {
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
}

app.get('/', (req, res) => {
  
    commands.cd()
    commands.gitAdd()
    commands.gitCommit()
    commands.gitPulling()
})

app.listen(port, () => {
  console.log(`Examplee app listening at http://localhost:${port}`)
})
