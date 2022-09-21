import { userContext } from "../../base-pruebas/06-deses-obj";



describe ("prueba en 06-deses-obj", ()=>{
    test('usContext debe retornar dos numeros', () => {
    
        const usertest ={
            lat: 14.1232,
            lng: -12.3232
        };
        
       
       
        
        const user = userContext 
});

 
});




// const usContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {


//     // console.log( nombre, edad, rango );
    
//     return {
//         nombreClave: clave,
//         anios: edad,
//         latlng: {
//             lat: 14.1232,
//             lng: -12.3232
//         }
//     }

// }
//  test('getUsuarioActivo debe de retornar un objeto', () => { 
//     const name = `Edgar`;
//     const user = getUsuarioActivo( name );
//                  console.log (user)
//                 expect( user).toStrictEqual({
//                     uid:`ABC567`,
//                     username:name
//                 });
//   })