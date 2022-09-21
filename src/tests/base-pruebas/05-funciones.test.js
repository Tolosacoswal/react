import { getUser,getUsuarioActivo } from "../../base-pruebas/05-funciones";


// describe('pruebas en 05-funciones', () => { 
//     test('getUser debe de retornar un objeto', () => { 
//         const testUser = {
//             uid: 'ABC123',
//             username: 'El_Papi1502'
//         };
//         const user =     getUser();
//         console.log (user)
//         expect( testUser).toStrictEqual(user); 
//      });
//  });


 test('getUsuarioActivo debe de retornar un objeto', () => { 
    const name = `Edgar`;
    const user = getUsuarioActivo( name );
                 console.log (user)
                expect( user).toStrictEqual({
                    uid:`ABC5kkkkk67`,
                    username:name
                });
  })