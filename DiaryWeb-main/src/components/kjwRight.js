import right from '../img/forward.png';

function KjwRight(props){
    const move = () =>{
        alert("아직 구현 안됨");
    }

    return(
        <div className="kjw_arrow" onClick={move}>
            <img src={right} alt="right" />
        </div>
    );
}

export default KjwRight;