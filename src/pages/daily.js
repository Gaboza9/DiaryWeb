import KjwLeft from '../components/kjwLeft';
import KjwRight from '../components/kjwRight';
import KjwDate from '../components/kjwDate';
import KjwWeatherList from '../components/kjwWeatherList';
import KjwPictureArray from '../components/kjwPictureArray';
import KjwMood from '../components/kjwMood';
import KjwSidebar from '../components/kjwSidebar';
import { useState } from 'react';

function Daily(){
    const [numPicture, setNumPicture] = useState(3);
    const changePicture=(n)=> {
        setNumPicture(n);
        console.log("main", numPicture);
    }

    return (
        <div className="body">
            <KjwSidebar funcPicture={changePicture}/>
            <div className="main">
                <section className="secLeft">
                    <KjwLeft />
                </section>

                <section className="secCenter">
                    <div className="kjw_paper">
                        <div className="kjw_top1">
                            <KjwDate />
                            <KjwWeatherList />
                        </div>
                        <input className="kjw_top2" placeholder='제목을 적어주세요.'/>
                        <textarea className="kjw_center" placeholder='내용을 적어주세요.'/>
                        <div className="kjw_bottom">
                            <KjwPictureArray num={numPicture}/>
                            <KjwMood />
                        </div>
                    </div>
                </section>
                
                <section className="secRight">
                    <KjwRight />
                </section>
            </div>
        </div>
    );
}

export default Daily;