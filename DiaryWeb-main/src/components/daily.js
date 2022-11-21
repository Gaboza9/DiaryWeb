import KjwLeft from "./kjwLeft";
import KjwRight from "./kjwRight";
import KjwDate from "./kjwDate";
import KjwWeatherList from "./kjwWeatherList";
import KjwPictureArray from "./kjwPictureArray";
import KjwMood from "./kjwMood";
import KjwSidebar from "./kjwSidebar";
import { useState } from "react";

function Daily() {
  const [numPicture, setNumPicture] = useState(3);
  const changePicture = (n) => {
    setNumPicture(n);
    console.log("main", numPicture);
  };

  return (
    <div className="body">
      <KjwSidebar funcPicture={changePicture} />
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
            <input className="kjw_top2" placeholder="제목을 적어주세요." />
            <textarea className="kjw_center" placeholder="내용을 적어주세요." />
            <div className="kjw_bottom">
              <KjwPictureArray num={numPicture} />
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
