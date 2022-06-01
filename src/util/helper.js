const newdate=new Date();
const printdate=function(){
   const date= newdate.getDate() + "-"+ (newdate.getMonth()+1) +"-"+newdate.getFullYear();
   console.log(date)

}
const printmonth=function(){
    const month=(newdate.getMonth()+1)
    console.log(month)
}
const getbatchinfo=function(){
    console.log("Radon, W3D3, the topic for today is Nodejs module system")
}
module.exports.printdate=printdate
module.exports.printmonth=printmonth
module.exports.getbatchinfo=getbatchinfo