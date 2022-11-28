import right from '../../img/forward.png';

function KjwRight(props){
    const style = {
        width:"25px",
        border:"0",
        outline:"0",
        backgroundColor:"#ffffff00",
        marginLeft:"15px"
    }
    
    const move = () =>{
        alert("아직 구현 안됨");
    }

    return(
        <button style={style} onClick={props.listener}>
            <img src={right} alt="right" style={{width:"20px"}} />
        </button>
    );
}

export default KjwRight;