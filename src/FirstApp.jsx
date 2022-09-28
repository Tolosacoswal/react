
import { PropTypes } from "prop-types";

export const FirstApp = ({
    texto,
     subTitle,
     nombre 
    })=>{
    // console.log(props);
   
    return (
        
        <>
        <h1 data-testid="test-texto">{texto}</h1>
     {/* <code>{JSON.stringify(NewMensajeichon)}</code>  */}
        <p>{subTitle }</p>
        <p>{subTitle }</p>

        <p>{nombre }</p>

        </>
    )
    
    
}
FirstApp.prototype={
    texto: PropTypes.string.isRequired, 
    subTitle:PropTypes.string,
}
FirstApp.defaultProps = {
    texto: "no tenemos ningun texto",
    subTitle: "no tenemos texto",
    nombre: "edgard"
}
