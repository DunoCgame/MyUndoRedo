class CaptureCargaData{
	
constructor(ContenedorPadre, ContenedorHijo) {
			this.ContenedorPadre = ContenedorPadre;
			this.ContenedorHijo = ContenedorHijo;
			
	  }


CaptureDataLienso(){
	


		// lienso Data
			let lienso = document.getElementById(this.ContenedorPadre);
			
			let Color_Lienso = lienso.style.background;
			
			let Numero_de_Cuadros = lienso.childNodes.length;
			
		// lienso Data
		//console.log(Numero_de_Cuadros)

		/*objeto que contiene datos*/
			let DataObtenida = {
						ColorLienso:"",
						ColorCuadro:[],

					};
		/*objeto que contiene datos*/

		//Almacenamient 
			//Lienso Color
			DataObtenida.ColorLienso = Color_Lienso;
			
			// Imagenes		
			for(let i=0; i<Numero_de_Cuadros; i++){
						DataObtenida.ColorCuadro.push({
								Color:lienso.childNodes[i].style.background
						});
				}
		
			
			//llamar guadar		
			return DataObtenida
			//console.log(DataObtenida)
		}
	
CargaData(Objeto){
		
	// lienso Data
			let lienso = document.getElementById(this.ContenedorPadre);
			
			let Color_Lienso = lienso.style.background;
			
			let Numero_de_Cuadros = lienso.childNodes.length;
			
			 //console.log(Objeto.ColorCuadro[0].Color)
		// lienso Dat
		lienso.style.background = Objeto.ColorLienso
	
	//Imagenes		
	for(let i=0; i<Numero_de_Cuadros; i++){
					
			lienso.childNodes[i].style.background=Objeto.ColorCuadro[i].Color;
						
				}
	
	
		
		
	}// cierre del metodo


} //cierre de clase
