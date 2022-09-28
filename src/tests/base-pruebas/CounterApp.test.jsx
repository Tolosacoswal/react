

import { fireEvent, render,screen } from "@testing-library/react";
import { CounterApp } from "../../CounterApp";
describe('pruebas en <CounterApp/>', () => { 
    const valorInicial = 100;
    test('debe hacer match con el snapshot', () => { 
        
        const {container}= render (<CounterApp value={valorInicial}/>)
        expect (container).toMatchSnapshot();
     });
     test('deb de mostrar el valor inicial de 100 <CounterApp value ={100}/>', () => {
        render(<CounterApp value = {100}/>);
            expect(screen.getByText("100")).toBeTruthy();
            expect(screen.getByRole(`heading`,{level:2}).innerHTML).toContain(`100`)
      });
      test('debe de incrementar con el boton +1', () => { 
        render( <CounterApp value={valorInicial}/>);
        fireEvent.click(screen.getByText(`+1`));
        expect(screen.getByText("102")).toBeTruthy();

      });
      test('debe de decrementear con el boton -1', () => { 
        render( <CounterApp value={valorInicial}/>);
        fireEvent.click(screen.getByText(`-1`));
        expect(screen.getByText("98")).toBeTruthy();

      });
      test('debe de inicializar con el boton reset', () => { 
        render( <CounterApp value={valorInicial}/>);
        fireEvent.click(screen.getByText(`reset`));
        expect(screen.getByText("100")).toBeTruthy();

      });
      test('deb de funcionar el boton reset', () => { 
        render(<CounterApp value ={300}/>);
        fireEvent.click(screen.getByText(`+1`));
        fireEvent.click(screen.getByText(`+1`));
        fireEvent.click(screen.getByText(`+1`));
        fireEvent.click(screen.getByText(`reset`));
        fireEvent.click (screen.getByRole("button", {name:"boton-reset"}))

        screen.debug();
        // expect(screen.getByText(300)).toBeTruthy();
       });
    }); 

