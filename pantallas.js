
const  fs  =  requerir ( "fs" ) ;
let  myJsonName  =  "/myJSON.json" ;
const  JsonPath  =  __dirname  +  myJsonName ;
const  miFecha  =  fs . readFileSync ( JsonPath ) ;
const  myDataParse  =  JSON . analizar ( miFecha ) ;

 colores  constantes =  [
  {  restablecer : "\x1b[0m"  } ,
  {  negro : "\x1b[30m"  } ,
  {  rojo : "\x1b[31m"  } ,
  {  verde : "\x1b[32m"  } ,
  {  amarillo : "\x1b[33m"  } ,
  {  azul : "\x1b[34m"  } ,
  {  magenta : "\x1b[35m"  } ,
  {  cian : "\x1b[36m"  } ,
  {  blanco : "\x1b[37m"  } ,
  {  gris : "\x1b[90m"  } ,
  {  carmesí : "\x1b[38m"  } ,
] ;

función  obtenerTodasLasPantallas ( )  {
  const  conf  =  myDataParse ;
  const  pantallas  =  [ ] ;
  conferencia _ paraCada ( ( elemento )  =>  {
    pantallas _ empujar ( elemento ) ;
  } ) ;

   pantallas de retorno ;
}


función  getScreenByButton ( botón )  {
  const  todas las Pantallas  = obtener Todas las  Pantallas ( ) ;
  const  miPantalla  =  [ ] ;
  todas las pantallas . paraCada ( ( elemento )  =>  {
    if  ( boton . toLowerCase ( )  ==  elemento . boton . toLowerCase ( ) )
      miPantalla . empujar ( elemento ) ;
  } ) ;

  volver  screenValidator ( miPantalla ) ;
}


función  getScreenByName ( nombre de pantalla )  {
  const Todas las  Pantallas  = obtener Todas las  Pantallas ( ) ;
  const  miPantallaPorNombre  =  [ ] ;
  Todas las pantallas . paraCada ( ( elemento )  =>  {
    if  ( nombre de pantalla . toLowerCase ( ) == elemento . nombre . toLowerCase ( ) )  
      miPantallaPorNombre . empujar ( elemento ) ;
  } ) ;

  volver  screenValidator ( myScreenByName ) ;
}

// Validar pantallas
función  screenValidator ( miPantalla )  {
  if  ( myScreen . length  ==  1 )  return  myScreen ;
  if  ( myScreen . length  ==  0 )  devuelve  "¡No encontrado!" ;

  volver  "Detectamos 2 o más pantallas con el mismo nombre de botón o nombre de pantalla, ¡cámbielo!" ;
}

// Obtener Otra Pantalla
función  getOptions ( botón )  {
  const  screenByButton  =  getScreenByButton ( botón ) ;
  let  opciones  =  [ ] ;
  pantalla por botón . paraCada ( ( { contenido } )  =>  {
    contenido _ Otras pantallas . paraCada ( ( e )  =>  {
      opciones _ empujar ( e ) ;
    } ) ;
  } ) ;

  opciones _ forEach ( ( { título ,  botón : { nombre }  } )  =>  {
    consola _ log ( ` *) ${ título } -------> Botón: ${ nombre } ` ) ;
  } ) ;
}

// Obtener preguntas
función  obtenerPreguntas ( botón )  {
  const  screen  =  getScreenByButton ( botón ) ;
  let  myQuestions ;
  pantalla _ paraCada ( ( { contenido } )  =>  {
    misPreguntas  =  contenido . preguntas ;
  } ) ;

  volver  misPreguntas ;
}

//Devuelve el menú principal con el color seleccionado
función  getOptionsColor ( colorName ,  botón )  {
  const  screenByButton  =  getScreenByButton ( botón ) ;
  let  opciones  =  [ ] ;
  pantalla por botón . paraCada ( ( { contenido } )  =>  {
    contenido _ Otras pantallas . paraCada ( ( e )  =>  {
      opciones _ empujar ( e ) ;
    } ) ;
  } ) ;

  opciones _ forEach ( ( { título ,  botón : { nombre }  } )  =>  {
    consoleLogColor ( colorName ,  ` *) ${ título } --------> Botón: ${ nombre } ` ) ;
  } ) ;
}

//Obtener controlador por botón
función  GetHandlerByButton ( nombre del botón )  {
  const  principalScreen  =  getScreenByButton ( "principal" ) ;
  dejar  manejador  =  "" ;

  pantallaprincipal . forEach ( ( {  contenido : { Otras Pantallas }  } )  =>  {
    Otras pantallas . paraCada ( ( { botón } )  =>  {
      if  ( nombre del botón . toLowerCase ( ) == botón . nombre . toLowerCase ( ) )  
        controlador  =  botón . manipulador ;
    } ) ;
  } ) ;

   controlador de devolución ;
}

// Devuelve console.log con el color que seleccionó
función  consoleLogColor ( colorName ,  texto )  {
  dejar  restablecer  =  Objeto . valores ( colores [ 0 ] ) . a la cadena ( ) ;
  dejar color  seleccionado  =  restablecer ;
  colores _ paraCada ( ( e )  =>  {
    si  (
      colorNombre . a la cadena ( ) . a Minúsculas ( )  ==
      objeto _ teclas ( e ) . a la cadena ( ) . a Minúsculas ( )
    )  {
      color seleccionado  =  objeto . valores ( e ) . a la cadena ( ) ;
    }
  } ) ;

   consola de retorno . registro ( color seleccionado ,  texto ,  reinicio ) ;
}

función exportar a  JSON ( archivo de nombre ,  datos )  {//Exportar los datos a un archivo JSON

  const  misDatos  =  JSON . cadena ( datos ) ;
  fs . writeFileSync ( ` ${ nameFile } .JSON` ,  myData ,  ( )  =>
    consola _ log ( "No se ha podido crear el archivo con los datos enviados" )
  ) ;
  consola _ log ( "Tus datos han sido exportados!" ) ;
}

//Cambiar la ubicación de JSON y crear un historial
función  changePathJSON ( viejaRuta ,  nuevaRuta )  {
  prueba  {
    fs . renameSync ( antiguaRuta ,  nuevaRuta ) ;
    fs . writeFileSync ( "historyPath.JSON" ,  JSON . stringify ( newPath ) ) ;
  }  atrapar  ( e )  {
    consola _ log ( "No se ha podido realizar la acción" ) ;
  }
}


módulo _ exportaciones  =  {
  validador de pantalla ,
  obtenerOpciones ,
  obtener todas las pantallas ,
  getScreenByButton ,
  obtener preguntas ,
  GetHandlerByButton ,
  obtenerPantallaPorNombre ,
  getOptionsColor ,
  consolaLogColor ,
  exportar a JSON ,
  cambiarPathJSON ,
} ;
