
import { PropTypes } from "prop-types";

export const FirtsApp = ({
    texto,
     subTitle,
     nombre 
    })=>{
    // console.log(props);
   
    return (
        
        <>
        <h1>{ texto}</h1>
    {/* <code>{JSON.stringify(NewMensajeichon)}</code> */}
        <p>{subTitle }</p>
        <p>{nombre }</p>

        </>
    )
    
    
}
FirtsApp.prototype={
    texto: PropTypes.string.isRequired, 
    subTitle:PropTypes.string,
}
FirtsApp.defaultProps = {
    texto: "no tenemos ningun texto",
    subTitle: "no tenemos texto",
    nombre: "edgard"
}
