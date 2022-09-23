
import { fireEvent, render, screen } from "@testing-library/react";

import { CounterApp } from "../../CounterApp";

describe('pruebas en <CounterApp/>', () => { 

        const initialValue = 10;
        test('debe de hacer match con el snapshot', () => { 
                const {container}= render(<CounterApp value = {initialValue}/>); expect (container).toMatchSnapshot();});

         
         test('debe mostrar el valor inicial de 100 <CounterApp value={100}>', () => { 
          render (<CounterApp value={100}/>);
          expect(screen.getByTestId(100)).toBeTruthy(); 
         });
         
         
         test('debe de incrementar con el botón +1', () => { 
                render( <CounterApp value = {initialValue}/>);
                fireEvent.click( screen.getAllByText(`+1`))
          });
          
 })
 