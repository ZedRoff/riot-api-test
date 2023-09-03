const express = require("express")
const app = express()
const dotenv = require("dotenv")
const axios = require("axios")
const cors = require("cors")
app.use(cors())
app.use(express.json())


dotenv.config()
app.listen(3000, () => console.log("App is running"))
app.get("/api/", (req, res) => res.send("API is OK"))
app.post("/api/getbasicinfos/", async(req, res) => {
    let {data} = await axios({
        method: "get",
        url: `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/`+req.body.name,
        params: {
            api_key: process.env.RGAPI
        }
    }).catch(err => {
        console.log(err)
        return res.send("notfound")
        // test
    })
    return res.send(data)
})