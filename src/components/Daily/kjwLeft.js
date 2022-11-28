import left from '../../img/back.png';

function KjwLeft(props){
    const style = {
        width:"25px",
        border:"0",
        outline:"0",
        backgroundColor:"#ffffff00",
        marginRight:"15px"
    }
    
    return(
        <button style={style} onClick={props.listener}>
            <img  src={left} alt="left" style={{width:"20px"}}/>
        </button>
    );
}

export default KjwLeft;