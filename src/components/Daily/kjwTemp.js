function KjwTemp(props) {
    return (
        <>
            {props.pictureArray.map((n, index) =>{
                return(
                    <img
                        key={index}
                        src={require(`../../img/${n}.png`)}
                        alt={n}
                    /> 
                )
            })}
        </>
    );
    
}

export default KjwTemp;