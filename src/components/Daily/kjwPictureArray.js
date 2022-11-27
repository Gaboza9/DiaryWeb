import KjwPicture from "./kjwPicture";

function KjwPictureArray(props){
    return(
        <> 
            {[...Array(props.num)].map((n, index) =>{
                return(
                    <KjwPicture key={index}/>
                )
            })}
        </>
    );
}

export default KjwPictureArray;