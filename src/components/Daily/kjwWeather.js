function KjwWeather(props) {
    const { content, isSelected, selectListener, elementIndex } = props;

    const imgStyle = {
        marginLeft: "12px"
    }
    return(
        <>
            {!isSelected && 
                <img
                    src={require(`../../img/icon_not_${content}.png`)}
                    alt={content}
                    style={imgStyle}
                    onClick={() => selectListener(elementIndex)}
                /> }
            {isSelected &&
                <img
                    src={require(`../../img/icon_${content}.png`)}
                    alt={content}
                    style={imgStyle}
                    onClick={() => selectListener(elementIndex)}
                />}
        </>
        
    );
}

export default KjwWeather;