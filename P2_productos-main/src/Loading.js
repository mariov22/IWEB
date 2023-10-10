import Spinner from "react-bootstrap/Spinner"

export default function Loading(props) {

    if (props.loading) {
        return (
            <div>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
                    integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
                    crossorigin="anonymous"
                />
                <Spinner id="loading" className="spinner" animation="border" >
                </Spinner>
            </div>
        )
    }


}