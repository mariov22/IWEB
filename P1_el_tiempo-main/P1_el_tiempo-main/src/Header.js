export default function Header(props) {
    return(
        <div id = "cabecera">
            <img className = "logo" src ={process.env.PUBLIC_URL + "/sun.webp"} alt=""/>
            <h3 className = "mensaje" >Bienvenido al tiempo de Mario Vicente Albertos</h3>
        </div>
    )
}