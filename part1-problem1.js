function jajanBoba(uang,callback){
    setTimeout(()=>{
        callback(uang=uang-5000)}
        ,5000)
    setTimeout(()=>{
        console.log("kamu jajan seblak dengan harga 8000")}
        ,6000)
    setTimeout(()=>{
        callback(uang=uang-8000)}
        ,9000)
    console.log("kamu jajan boba dengan harga 5000")
}
function jajanSeblak(uang){
    console.log("sisa uang kamu "+uang)
}