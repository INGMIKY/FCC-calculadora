import '../style/BotonClear.css'

const BotonClear = (props) => {
    return (
        <div className='boton-clear' onClick={() => props.manejarPantalla()}>
            {props.children}
        </div>
    )
}

export default BotonClear;