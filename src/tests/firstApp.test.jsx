import { render } from "@testing-library/react";
import { FirtsApp } from "../FirtsApp";

describe('pruebas en <firstApp/>', () => {  


    test('debe hacer match con el snapshot ', () => {
    render (<FirtsApp/>)
     });

});