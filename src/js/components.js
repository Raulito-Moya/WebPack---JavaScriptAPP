  import '../css/components.css'
  //import webpacklogo from '../assets/img/webpack-logo.png'

 export const saludar = (nombre) => {

    console.log('creando tiqueta h1');
  
    const h1 = document.createElement('h1')
    h1.innerText = `Hola, ${nombre}!!!`
  
    document.body.append(h1);

    //img
    //todo: me quede aqui q tegno q configurar el fileloader para que copile
   // const img = document.createElement('img');
   // img.src = webpacklogo
   // document.body.append(img)
   // console.log('imagen creada');
  }




  