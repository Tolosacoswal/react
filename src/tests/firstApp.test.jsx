import { getAllByText, getByText, render } from "@testing-library/react";

//import { renderIntoDocument } from "react-dom/test-utils";
import { FirstApp } from "../FirstApp";

describe('pruebas en <FirstApp/>', () => {  


   
     test('debe mostrar el titulo en un h1', () => { 

      const texto = `hola, soy vegueta`;
      const { container, getByText, getByTestId} = render 
      (<FirstApp texto={texto}/>)
      expect( getByText(texto)).toBeTruthy();
      //const h1 = container.querySelector("h1");
      //expect(h1.innerHTML).toContain (texto)

      expect ( getByTestId ("test-texto").innerHTML).toContain(texto);
    });
    test('debe d mostrar el subtitulo enviado por props', () => { 
      const texto =`hola, soy vegueta`;
      const subTitle =`soy un principe sayayin`;
      const {getAllByText}=render(<FirstApp   texto={texto} subTitle={subTitle}/>);
      expect(getAllByText(subTitle).length).toBe(2);

    })
 
}); 