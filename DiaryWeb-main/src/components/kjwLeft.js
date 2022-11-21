import left from '../img/back.png';

function KjwLeft(props){
    const move = () =>{
        alert("아직 구현 안됨");
    }

    return(
        <div className="kjw_arrow" onClick={move}>
            <img src={left} alt="left"/>
        </div>
    );
}

export default KjwLeft;