export default function Header(props){
    return(
        <div id = "cabecera">
            <img className = "logo" alt = " " src = {process.env.PUBLIC_URL + "/sun.webp"} />
            <h3 className = "mensaje" > Mario Vicente Albertos </h3>
        </div>
    )
}