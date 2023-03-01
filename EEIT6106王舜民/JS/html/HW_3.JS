let img_all=document.images;
       
        for(let i=0;i<img_all.length;i++){
                 console.log(img_all[i].id);
                 console.log(img_all[i].getAttribute("src"));
                 img_all[i].src="Image/star.gif"
                 img_all[i].addEventListener("mouseover",mouseover); 
                 img_all[i].addEventListener("mouseout",mouseout);   
                 img_all[i].addEventListener("click" ,click)
                 img_all[i].addEventListener("dblclick" ,dblclick);
                }
           
       
        function mouseout(){
            for(let i=0;i<this.id.substr(5);i++){
            img_all[i].src="Image/star.gif";
                }
            }
        function mouseover(){
            for(let i=0;i<this.id.substr(5);i++){
            img_all[i].src="Image/chngstar.gif";
                }
            }
        function click(){
            for(let i=0;i<this.id.substr(5);i++){
                img_all[i].src="Image/chngstar.gif";
                document.getElementById("score").innerHTML="您的評分為:"+(i+1)+"分";
                }
                for(let i=0;i<img_all.length;i++){
                img_all[i].removeEventListener("mouseout",mouseout);
                img_all[i].removeEventListener("mouseover",mouseover);
                img_all[i].removeEventListener("click",click);
                }    
        }
        function dblclick(){
            for(let i=0;i<img_all.length;i++){
            img_all[i].src="Image/star.gif";
            document.getElementById("score").innerHTML="您的評分為:"
            img_all[i].addEventListener("mouseout",mouseout);
            img_all[i].addEventListener("mouseover",mouseover);
            img_all[i].addEventListener("click",click);
                }
        }