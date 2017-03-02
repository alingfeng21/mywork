window.onload=function(){
	var oDiv=document.getElementById('bigPic');
	var aPicLi=document.getElementById('pic_list').getElementsByTagName('li');
	
	var oIcoUl=document.getElementById('ico_list').getElementsByTagName('ul')[0];
	var aIcoLi=document.getElementById('ico_list').getElementsByTagName('li');
	
	var oBtnNext=document.getElementById('btn_next'); 
	var iNowUlLeft=0;      
	var iNow=0;       
	var i=0;
	
		for(var i=0;i<aIcoLi.length;i++){
		   aIcoLi[i].index=i;		
		   aIcoLi[i].onclick=function(){	
		        iNow=this.index;
				tab();

	 		} 
			
			function tab(){ 
				for(var i=0;i<aIcoLi.length;i++){		
					aIcoLi[i].className='';
					aPicLi[i].style.filter='alpha(opacity:0)';		
					aPicLi[i].style.opacity=0;
					miaovStopMove(aPicLi[i]);//
				}
					aIcoLi[iNow].className='active';		
					miaovStartMove(aPicLi[iNow],{opacity:100},MIAOV_MOVE_TYPE.BUFFER);
			}
			
		}

 var timer=setInterval(play,2000);
	  function play(){
			iNow++; 
			if(iNow==aIcoLi.length){
			  iNow=0;
			}
		    if(iNow<iNowUlLeft){
			   iNowUlLeft=iNow;
			}
			if(iNow>=iNowUlLeft+4){   
			  iNowUlLeft=iNow-3; 
			}
			
			miaovStartMove(oIcoUl,{left:-iNowUlLeft*aIcoLi[0].offsetWidth},MIAOV_MOVE_TYPE.BUFFER);
			tab();
	  }

	oDiv.onmouseover=function(){
	   clearInterval(timer);
	}
	oDiv.onmouseout=function(){
	   timer=setInterval(play,2000);
	}

}