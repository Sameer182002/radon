const axios=require("axios")


// GOTO  http://api.openweathermap.org => “subscribe” current weather data ==> get api key for Free version ==> create new account and Verify your emailId( Must verify to avoid issues) => go to My APi keys under your account name(top right corner) or https://home.openweathermap.org/api_keys => save the key/appid somewhere. Now proceed further.
// Create API's to do the following:
// // Get weather of London from  http://api.openweathermap.org/data/2.5/weather?q=London&appid=<useYourOwnAppId>  
// (NOTE: must use HTTP infront of the url else axios will attempt to hit localhost and give error  ..also use HTTP only and not HTTPS)
// then change the above to get the temperature only( of London)
// Sort the cities     [ "Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]   in order of their increasing temperature
// Result should look something like this
 
//                    [
//                    {city:"London", temp: 280},
//                    {city:"Moscow", temp: 290},
//                    {city:"Bangalore", temp: 301.2},
//                    .......
//                    ]
let tempOfCities= async function(req,res){
    try{
        let cities=["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let array=[]
        for(let i=0;i<cities.length;i++){
            let cityObj={cities:cities[i]}
            let result= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=b9ad66caca95750c746ffe9f6698c199`)
            cityObj.temp=result.data.main.temp
            array.push(cityObj)
        }
        let sorted= array.sort((a,b)=>a.temp-b.temp)
        res.status(200).send({msg:"success",temp:sorted})
    }
catch(err){
    res.status(500).send({error:err.message})
}
}
 

module.exports.tempOfCities=tempOfCities