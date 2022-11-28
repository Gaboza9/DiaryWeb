import React, { useState }from 'react'
import MenuItem from './MenuItem'
import EmotionMenu from './Menu/EmotionMenu';
import ImageMenu from './Menu/ImageMenu';
import UploadMenu from './Menu/UploadMenu';
import TextDialog from './Menu/TextDialog';

function Sidebar() {
    const [content,setContent] = useState('');
    const [isOpen,setOpen] = useState(false);

    const menuItems = [
        {
            icon : "bi bi-emoji-smile fs-2" ,
            title: '_기분'
        },
        {
            icon : "bi-image fs-2" ,
            title: '이미지'
        },
        
        {
            icon : "bi bi-fonts fs-2" ,
            title: '텍스트'
        }
    ];

    const setSideMenu = ()=> {
        if(content === '_기분')
            return (
                <div style={{borderRight:'1px solid grey', width:'21%'}} >
                <EmotionMenu/>
                </div>
            )
        else if(content === '이미지')
            return (
                <div style={{borderRight:'1px solid grey', width:'27%'}}>
                <ImageMenu/>
                </div>
            )
        else if(content === '업로드')
            return (
                <div>
                <UploadMenu/>
                </div>
            ) 
        else if(content === '텍스트')
        return (
            <div>
            <TextDialog/>
            </div>
        )  
        
    }

    const clickCloseIcon = () => {
        setContent("");
        setOpen(false);
    }
    
    const setIcon = () => {
        if(isOpen === false)
            return <i class="bi bi-chevron-double-right fs-3 mx-3 my-2 px-3 py-3 fixed-bottom" 
            ></i>
        else
           return <i class="bi bi-chevron-double-left fs-3 mx-3 my-2 px-3 py-3 fixed-bottom"
           onClick={clickCloseIcon}></i>
    }

    const changeMenu =(title)=>{
        if(title === content){
            setContent("");
            setOpen(false);
        }
        else{
            setContent(title);
            setOpen(true);
            console.log(`${title}눌림`)
        }
    }

    return (
        <>
        <div style={{borderRight:'1px solid grey'}}>
            {menuItems.map(menuItem => (
                <div onClick={() => changeMenu(menuItem.title)}>
                <MenuItem icon={menuItem.icon} title={menuItem.title} background={content} />
                </div>
            ))}
            {setIcon()}
        </div> 
        {content && setSideMenu()}
        </>
    );
}
export default Sidebar