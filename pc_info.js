//node pc_info

const os =require('os');
const fs =require('fs');


let freeRam = byteToGb(os.freemem());
let totalRam =byteToGb(os.totalmem());
let usedRam = (totalRam-freeRam).toFixed(2);
let cpus = os.cpus();
let cpuCount =os.cpus().length;
let platform =os.platform();
let hostName = os.hostname();


console.log("boştaki ram:"+freeRam);
console.log("toplam ram:"+totalRam);
console.log("kullanılan ram:"+usedRam);
console.log("işlemciler:");
console.log(cpus);
console.log("işlemci sayısı:"+cpuCount);
console.log("platform:"+platform);
console.log("host adı:"+hostName);



let writeFilePcInfo=function(){
    fs.writeFile('pc_info.txt',getPcInfo(),function(err){
        if(err){
            console.log("dosyaya yazarken hata oldu");
        }
        });
}

function byteToGb(toplamByte){

    return (toplamByte/1024 /1024 /1024).toFixed(2);
}
let getPcInfo=function(){

   return `toplam ram: ${totalRam} kullanılan ram: ${usedRam} boştaki ram: ${freeRam} cpu sayısı: ${cpuCount}`;
}


exports.getPcInfo=getPcInfo;
exports.writeFilePcInfo=writeFilePcInfo;