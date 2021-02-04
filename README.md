Geliştirmiş olduğum bu modül İlgili sunucunun veya makinenin ram, cpu vs gibi teknik bilgilerine erişmemizi ve bunları dosyaya yazdırabilmemizi sağlayan bir modüldür.

Erişilebilir 3 fonksiyon ve 7 özellik mevcuttur.
getPcInfo() , writeFilePcInfo() ve printAllPcInfo()

getPcInfo()-> toplam ram: 11.90 kullanılan ram: 5.64 boştaki ram: 6.26 cpu sayısı: 4 şeklinde bir sonuç return eder.

![image](https://user-images.githubusercontent.com/29527525/106862218-ddcaf680-66d7-11eb-8b0a-8d3959395c31.png)


writeFilePcInfo()-> toplam ram, kullanılan ram,boştaki ram ve cpu sayısını mevcut dizine txt dosyası şeklinde kaydeder.

printAllPcInfo()-> erişilebilir 7 özelliğin hepsini loglar

![image](https://user-images.githubusercontent.com/29527525/106862632-72cdef80-66d8-11eb-99d9-5632e307360b.png)

şeklinde.

erişilebilir özellikler:
     freeRam 
     totalRam
     usedRam 
     cpus 
     cpuCount
     platform
     hostName



modülün genel kullanımına bir örnek:
![image](https://user-images.githubusercontent.com/29527525/106863236-423a8580-66d9-11eb-9800-8bd13fb38640.png)

