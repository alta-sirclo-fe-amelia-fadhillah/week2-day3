const boba=5000;
const seblak=8000;
function jajanBoba(uang,callback){
    console.log("kamu jajan boba dengan harga "+boba)
    setTimeout(()=>{
        if(uang<boba){
            console.log("maaf uang kamu belum cukup untuk membeli boba\nsisa uang kamu "+uang)
        }else{
            uang=uang-boba;
            console.log("sisa uang kamu "+uang)
            console.log("kamu jajan seblak dengan harga "+seblak)
        }
    },5000)
    setTimeout(()=>{
        if(uang<seblak){
            console.log("maaf uang kamu belum cukup untuk membeli seblak\nsisa uang kamu "+uang)
        }else{
            callback(uang=uang-seblak)
        }}
        ,9000);
    
}
function jajanSeblak(uang){
    console.log("sisa uang kamu "+uang)
}

jajanBoba(2000,jajanSeblak);