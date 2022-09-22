import { render } from "@testing-library/react";
//import { renderIntoDocument } from "react-dom/test-utils";
import { FirstApp } from "../FirstApp";

describe('pruebas en <FirstApp/>', () => {  


    test('debe hacer match con el snapshot ', () => {
    const texto = `hola, soy vegueta`;
       const {container} =(<FirstApp texto={texto}/>)
       console.log(container);
     });

}); 