import {  getAllByText, render,screen } from "@testing-library/react";

//import { renderIntoDocument } from "react-dom/test-utils";
import { FirstApp } from "../FirstApp";

describe('pruebas en <FirstApp/>', () => { 
  const texto = "hola soy, luffy";
  const subTitle = "el rey de los piratas";
  test('debe de hacer match con el snapshot', () => { 
  const {container}= render (<FirstApp texto/>)
  expect (container).toMatchSnapshot();
});
test('debe de mostrar el mensaje "el rey de los piratas"', () => { 
  render(<FirstApp texto={texto}/>)
  screen.debug();
});
test('debe de mostrar el titulo en un h1', () => {
  render(<FirstApp texto={texto}/>);
  expect( screen.getByRole("heading",{level:1}).innerHTML).toContain(texto);
});
test('debe de mostrar el subtitulo enviado por props', () => { 
  render(<FirstApp 
    texto = {texto}
    subTitle={subTitle}
    />);
    expect(screen.getAllByText(subTitle).length).toBe(2);
  
 });
}); 


   
