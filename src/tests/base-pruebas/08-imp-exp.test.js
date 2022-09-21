import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import { heroes } from "../../data/heroes";

describe('pruebas en 08-imp-exp', () => {

    //  test('getHeroeById debe retornarun heroe por ID', () => { 
    //  const id = 1;
    //  const hero = getHeroeById( id );
    //  expect ( hero).toEqual({id: 1, name: `Batman`,owner:`DC`}); 
    //  expect ( hero).toEqual({id: 1, name: `Batman`,owner:`DC`}); 

    // });
        
    
        // test('getHeroeById debe retornar undefined sino existe ID', () => { 
        // const id = 100;
        // const hero = getHeroeById( id );
      
        // expect ( hero).toBeFalsy(); 
   
   
        // });
     
     
    test('getHeroesByOwner debe regresar Heroes de Marvel', () => {  
    const owner = `Marvel` ;
    const heroes = getHeroesByOwner (owner);
    expect ( heroes.length).toBe ( 2 );
    // expect ( heroes).toEqual ( [
        
    //         { id: 1, name: 'Batman', owner: 'DC' },
    //         { id: 3, name: 'Superman', owner: 'DC' },
    //         { id: 4, name: 'Flash', owner: 'DC' }
          
      
    // ] );
    expect(heroes).toEqual(heroes.filter ( (heroe) => heroe.owner === owner ))

    console.log(heroes  )
    
    //expect(heroes).toEqual (heroes.filter( heroe => heroe.owner === owner ));
    //const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );
});
    });