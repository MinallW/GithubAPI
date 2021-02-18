const express = require('express')
const app = express()
const port = 8081
const { exec } = require('child_process')

const commands = {
    cd: () => {
        console.log('Navigating to /opt/FacilContabilidad-API')
        return exec("cd /opt/FacilContabilidad-API", (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`)
                return
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`)
                return
            }
            console.log(`stdout: ${stdout}`)
        })
    },
    stopAPI: () => {
        console.log('Stopping API')
        return exec("pm2 stop api", (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`)
                return
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`)
                return
            }
            console.log(`stdout: ${stdout}`)
        })
    },
    startAPI: () => {
        console.log('Starting API')
        return exec("pm2 start api", (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`)
                return
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`)
                return
            }
            console.log(`stdout: ${stdout}`)
        })
    },
    gitAdd: () => {
        console.log('Adding to Git')
        return exec("git add .", (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`)
                return
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`)
                return
            }
            console.log(`stdout: ${stdout}`)
        })
    },
    gitCommit: () => {
        console.log('Commiting to Git')
        let today = Date.now()
        return exec(`git commit -m ${today}`, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`)
                return
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`)
                return
            }
            console.log(`stdout: ${stdout}`)
        })
    },
    gitPulling: () => {
        console.log('Pulling from Git')
        return exec("git pull", (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`)
                return
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`)
                return
            }
            console.log(`stdout: ${stdout}`)
        })
    }
}

async function updating() {
    await commands.stopAPI()
    await commands.cd()
    await commands.gitPulling()
    await commands.startAPI()
}

app.get('/', (req, res) => {
    updating()
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
