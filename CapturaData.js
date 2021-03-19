// variables de captura de data
let ContentImgs;
let IMG;

// Variables de carga de data
let ContentImgs_carga;
let IMG_carga;

class CaptureCargaData{
	
	constructor(ContenedorPadre, contenedorImg, Imagenes) {
			this.ContenedorPadre = ContenedorPadre;
			this.contenedorImg = contenedorImg;
			this.Imagenes = Imagenes;
	  }


	CaptureDataLienso(){
	
	/**valores del lienso**/

		// lienso
			let lienso = document.getElementById(this.ContenedorPadre);
			let ImagenesExistentes = lienso.childNodes.length;
			let Colors = lienso.style.background;
		// lienso


		/*objeto que contiene datos*/
			let DataObtenida = {
						NumImg:"",
						ColorLienso:"",
						InfoButton:[],
						ContentImg:[],
						ImgData:[]
					};
		/*objeto que contiene datos*/
					
		/**Agregar valores al Objeto**/
			DataObtenida.ColorLienso = Colors;
			DataObtenida.NumImg = ImagenesExistentes;
		/**Agregar valores al Objeto**/

		if(lienso.hasChildNodes()==true){
			
			// contenedorimg
			ContentImgs = document.getElementsByClassName(this.contenedorImg);
			// contenedorimg
		
			// Imagenes
			IMG = document.getElementsByClassName(this.Imagenes);
			// Imagenes		
		
		
	/**valores del lienso**/
			//contenedor de imagenes
				if(this.contenedorImg!=null || this.contenedorImg!=undefined ){
					for(let i=0; i<lienso.childNodes.length; i++){
							DataObtenida.ContentImg.push({
										Color:ContentImgs[i].style.background
							});

					}
				}
				
				
			//imagenes estado
				if(this.Imagenes!=null || this.Imagenes!=undefined ){				
					for(let i=0; i<lienso.childNodes.length; i++){
							DataObtenida.ImgData.push({
										Width:IMG[i].width,
										Height:IMG[i].height,
										Src:IMG[i].src
							});
						}	
				}
			//boton estado
			
			
			//llamar guadar		
			return DataObtenida
			
		}
	/**Agregar valores al Objeto**/


	}



	CargaData(Objeto){
			// Objeto.ColorLienso
				// Objeto.NumImg
		// console.log(Objeto.ContentImg[0].Color);
		// console.log(Objeto.ImgData[0].Src);
		// console.log(Objeto.InfoButton);
		
		
		let lienso = document.getElementById(this.ContenedorPadre);
		
		if(lienso.hasChildNodes()==true){
			
			// contenedorimg
			ContentImgs_carga = document.getElementsByClassName(this.contenedorImg);
			// contenedorimg	
			// Imagenes
			IMG_carga = document.getElementsByClassName(this.Imagenes);
			// Imagenes			
			//cargar data
			lienso.style.background = Objeto.ColorLienso	
			
			// console.log(ContentImgs_carga[0].style.background);
			
		//contenedor de imagenes
			if(this.contenedorImg!=null || this.contenedorImg!=undefined ){
				for(let i=0; i<lienso.childNodes.length; i++){
						
				ContentImgs_carga[i].style.background = Objeto.ContentImg[i].Color;
						
				}
			}
			
			
			// console.log(IMG_carga[0].src);
		//imagenes estado
			if(this.Imagenes!=null || this.Imagenes!=undefined ){
				
				for(let i=0; i<lienso.childNodes.length; i++){
						IMG_carga[i].src = Objeto.ImgData[0].Src;
					}	
			}
			//boton estado

			
			
			
			
			
			
		}
		
		
	}


}