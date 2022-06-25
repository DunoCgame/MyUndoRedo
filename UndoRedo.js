function UndoRedo(){

	let pos=0;
	let SaveDate=[];
	
	//~ console.log(SaveDate);
	this.Debug=function(){
		 return SaveDate;
	}
	//Guardado
	this.Save=function(data){
	 if(data!=undefined || data!=null){ SaveDate.push(data); pos = SaveDate.length-1; }
		
	}

	//DESHACER
	this.Undo=function(){
			if(pos>0 && SaveDate.length>0){	pos-=1; }
						return SaveDate[pos];
	}

	//REHACER 
	this.Redo=function(){
			if(pos<(SaveDate.length-1)){ pos+=1;		}
						return SaveDate[pos];
	}

	//Estado
	this.State=function(){
		if(SaveDate.length>=0){
			if(pos!=0){return true; }
					   else{ return false;	}
		}
	}

}//Cierre de la Funcion
