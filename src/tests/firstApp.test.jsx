import { render } from "@testing-library/react";
import JSDOMEnvironment from "jest-environment-jsdom";
//import { renderIntoDocument } from "react-dom/test-utils";
import { FirstApp } from "../FirstApp";

describe('pruebas en <FirstApp/>', () => {  


    test('debe hacer match con el snapshot ', () => {
    const texto = `hola, soy vegueta`;
       const {container} =(<FirstApp texto={texto}/>)
       expect(container).toMatchSnapshot();
     });
     test('debe mostrar el titulo en un h1', () => { 

      const texto = `hola, soy vegueta`;
      const {containe, getByText} = (<FirstApp texto={texto}/>)
      
    })
JSDOMEnvironment
render 
}); 