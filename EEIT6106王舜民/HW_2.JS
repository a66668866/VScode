function checkDate(){
    let theDateObj=document.getElementById(`date`);
    let theDateObjVal=theDateObj.value;
    let theDateObjValLen=theDateObjVal.length;
    let sp=document.getElementById(`idspDate`);
    let re=/^[0-9]{4}\/[0-9]{2}\/[0-9]{2}$/g;
    let flag=true;
    if(re.test(theDateObjVal)){
        flag =true;
        }
    else{flag =false}
        
    let check=theDateObjVal.split("/");
    for(let i=0;i<check.length;i++){
        console.log(check[i]);
    }


    if(parseInt(check[1])>12){ return sp.innerHTML=`<img src='Image/error.png'><span class='wrong'>月份錯誤</span>`}
    
    switch(parseInt(check[1])){
        case 1: case 3:case 5:case 7:case 8:case 10:case 12:
            if(parseInt(check[2])>31){return sp.innerHTML=`<img src='Image/error.png'><span class='wrong'>日期錯誤</span>`}
            break;
        case 2:
            if(parseInt(check[0])%4==0 && parseInt(check[0])%100!=0){
                if(parseInt(check[0])%400==0){
                if(parseInt(check[2])>29){return sp.innerHTML=`<img src='Image/error.png'><span class='wrong'>日期錯誤(該年非閏年)</span>`}
                }
            }
            else{
                if(parseInt(check[2])>28){return sp.innerHTML=`<img src='Image/error.png'><span class='wrong'>日期錯誤(該年為閏年)</span>`}
            }
            break;
        case 4:case 6:case 9:case 11:
            if(parseInt(check[2])>30){return sp.innerHTML=`<img src='Image/error.png'><span class='wrong'>日期錯誤</span>`}
            break;
     }
    
    if(flag==true){
        sp.innerHTML=`<img src='Image/pass.png'><span class='correct'>格式正確</span>`
        }
    else{
        sp.innerHTML=`<img src='Image/error.png'><span class='wrong'>格式錯誤</span>`;
      }
        

   }
   function checkname(){
    let theNameObj = document.getElementById(`name`);
    let theNameObjVal=theNameObj.value;
    let theNameObjValLen=theNameObjVal.length;
    let sp = document.getElementById(`idspName`);
    let flagName=false;
    // let re =/^[\u4e00-\u9fff]+$/g;
    if(theNameObjValLen==0){
        return sp.innerHTML=`<img src='Image/error.png'><span class='wrong'>姓名不可為空</span>`
    }
    if(theNameObjValLen==1){
        return sp.innerHTML=`<img src='Image/error.png'><span class='wrong'>請填入至少兩個中文字</span>`
    }
    if(theNameObjValLen>=2){
       for(let i=0;i<theNameObjValLen;i++){
            if(theNameObjVal.charCodeAt(i)<=0x9fff && theNameObjVal.charCodeAt(i)>=0x4e00){
                console.log(`${theNameObjVal.charCodeAt(i)},true`);
                flagName=true;
            }
            else{
                console.log(`${theNameObjVal.charCodeAt(i)},false`);
                flagName=false;
                break;
                }
           }
           if(flagName==true){
               sp.innerHTML=`<img src='Image/pass.png'><span class='correct'>格式正確</span>`
           }
           else{
               sp.innerHTML=`<img src='Image/error.png'><span class='wrong'>格式錯誤</span>`;
           }
    }
   }

   function checkPwd(){
    let thePswObj = document.getElementById(`idPwd`);
    let thePswObjVal=thePswObj.value;
    let thePswObjValLen=thePswObjVal.length;
    let sp = document.getElementById(`idspPwd`);
    let flagPwd=false;
    let re=/[\[!@#$%^&*\]+a-zA-Z+0-9]+/g;
    if(thePswObjValLen==0){
        return sp.innerHTML=`<img src='Image/error.png'><span class='wrong'>密碼不可為空</span>`
    }
    if(thePswObjValLen>=6){
        if(re.test(thePswObjVal)){
            flagPwd=true;
        }
        else {flagPwd=false;} 
      }
        else {return sp.innerHTML=`<img src='Image/error.png'><span class='wrong'>密碼不足六字</span>`} 
    
    if(flagPwd==true){
               sp.innerHTML=`<img src='Image/pass.png'><span class='correct'>格式正確</span>`;
           }
           else{
               sp.innerHTML=`<img src='Image/error.png'><span class='wrong'>格式錯誤</span>`;
           }
    }
    

   document.getElementById("name").addEventListener("blur",checkname);
   document.getElementById("idPwd").addEventListener("blur",checkPwd);
   document.getElementById("date").addEventListener("blur",checkDate);