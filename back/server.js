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
    if(!req.body.name) return res.send("namemissing");
    let {data} = await axios({
        method: "get",
        url: `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/`+req.body.name,
        params: {
            api_key: process.env.RGAPI
        }
    }).catch(err => {
        console.log(err)
        return res.send("notfound")
      
    })
    let summonerLevel = data?.summonerLevel;
    let summonerName = data?.name;
    let summonerPuuid = data?.puuid;
    let summonerIcon = `https://ddragon.leagueoflegends.com/cdn/13.7.1/img/profileicon/${data?.profileIconId}.png`;
    return res.send({summonerLevel, summonerName, summonerPuuid, summonerIcon})



})

app.post("/api/getmostplayedchamps", async(req, res) => {
    let mostPlayedChamps = await axios({
        method: "get",
        url: `https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/`+data?.id+"/top",
        params: {
            api_key: process.env.RGAPI
        }
        
    }).catch(err => {
        console.log(err)
        return res.send("notfound")
    })
    return res.send({mostPlayedChamps: mostPlayedChamps?.data})
})
   
app.post("/api/getcurrentrank", async(req, res) => {


    
    let currentRank = await axios({ 
        method: "get",
        url: `https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/`+data?.id,
        params: {
            api_key: process.env.RGAPI
        }
    }).catch(err => {
        console.log(err)
        return res.send("notfound")
    })
    return res.send({currentRank: currentRank?.data})
})
app.post("/api/getlastgames", async(req, res) => {

    let lastGames = await axios({
        method: "get",
        url: `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/`+data?.puuid+"/ids",
        params: {
            api_key: process.env.RGAPI
        }
    }).catch(err => {
        console.log(err)
        return res.send("notfound")
    })
    return res.send({lastGames: lastGames?.data})
})
    
app.post("/api/getcurrentgame", async(req, res) => {
    let currentGame = await axios({
        method: "get",
        url: `https://euw1.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/`+data?.id,
        params: {
            api_key: process.env.RGAPI
        }
    }).catch(err => {
        console.log(err)
        return res.send("notfound")
    })
    return res.send({currentGame: currentGame?.data})
})
 