function KjwWeather(props) {
    const { content, isSelected, selectListener, elementIndex } = props;

    return(
        <>
            {!isSelected && 
                <img
                    src={require(`../img/icon_not_${content}.png`)}
                    alt={content}
                    onClick={() => selectListener(elementIndex)}
                /> }
            {isSelected &&
                <img
                    src={require(`../img/icon_${content}.png`)}
                    alt={content}
                    onClick={() => selectListener(elementIndex)}
                />}
        </>
        
    );
}

export default KjwWeather;