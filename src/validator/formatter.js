const trim = function(){
    const data="   functionUp   "
    console.log("The Data Before Trim Is"+data)
    console.log(data.trim())
}
module.exports.trim=trim

const tolowercase=function(){
    const data="HELLO I AM SAMEER"
    console.log("Before Function the data is :" + data)
    console.log(data.toLowerCase())
}
module.exports.toLowerCase=tolowercase

const touppercase=function(){
    const data="hello i am sameer"
    console.log("Before Function the data is :" + data)
    console.log(data.toUpperCase())
}
module.exports.toUpperCase=touppercase