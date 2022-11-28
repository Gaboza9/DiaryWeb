function KjwDecoration(props) {

    return (
        <>
            {props.targets.map((item, index) => {
                return(
                    <img
                        key={index}
                        src={require(`../../${item.detail}`)}
                        style={{top:`${item.top}px`, left:`${item.left}px`, position:"absolute",
                            width:"120px", height:"120px"}}
                    >{console.log("##########",item)}</img>
                )
            })}
        </>
    );
}

export default KjwDecoration;