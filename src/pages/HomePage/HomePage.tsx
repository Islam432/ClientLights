import React, { useContext } from "react";
import css from "./HomePage.module.css";
import block1 from "../../assets/block1.jpg";
import block2 from "../../assets/block2.jpg";
import block3 from "../../assets/block3.jpg";
import trlight from "../../assets/trlight.png";
import { AppContext } from "../../App";
import block4 from "../../assets/block4.jpg"
import logo1 from "../../assets/logo1.svg"
import logo2 from "../../assets/logo2.svg"
import logo3 from "../../assets/logo3.svg"
import { Link } from "react-router-dom";
interface HomePageProps {
  // определите свои пропсы здесь, если есть
}
//comment 

const HomePage: React.FC<HomePageProps> = () => {
  const { auth } = useContext(AppContext);

  const commonBackgroundStyle = {
    backgroundImage: `url(${block1})` ,
    backgroundSize: "cover",
    
     // You can adjust this based on your needs

    
     // You can adjust this based on your needs
    // Add other common background-related styles if necessary
  };
  const block2Style = {
    backgroundImage: `url(${block2})`,
    backgroundRepeat:"no-repeat",
    backgroundSize: "cover",

    
  };
  const block3Style = {
    backgroundImage: `url(${block3})`,
    backgroundRepeat:"no-repeat",
    backgroundSize: "cover",
  
  };
  const block4Style = {
    backgroundImage: `url(${block4})`,
    backgroundRepeat:"no-repeat",
    backgroundSize: "cover",

  };
  return (
    <div className={css.container}>
      <div className={css.block1} style={commonBackgroundStyle}>
        <div className={css.content}>
          <p className={css.text}>
            Where Technology Meets Pedestrian Protection
          </p>
          <h2 className={css.title}>SMART CROSSWALK</h2>
        </div>
      </div>
      <div className={css.block2} style={block2Style}>
        <p className={css.text2}>
          An intelligent pedestrian crossing system powered by renewable energy
          sources. Designed for swift driver awareness, the system activates
          upon a touch-sensitive button, providing immediate notification about
          pedestrians on the road.
        </p>
      </div>

      <div className={css.blockk} style={block3Style}>
        <h2 className={css.title1}>Components of the Smart Crosswalk</h2>
        <div>
          <div className={css.block3}>
            <div className={css.trdiv}>
              <img src={trlight} alt="trafficlight" className={css.light} />
              <p className={css.list1}>Touch-sensitive button</p>
              <p className={css.list2}>Strobe light</p>
              <p className={css.list3}>Gobo projector</p>
              <p className={css.list4}>Road sign</p>
              <p className={css.list5}>Solar panel</p>
              <p className={css.list6}>MPPT</p>
              <p className={css.list7}>Battery</p>
              <p className={css.list8}>Sound notification</p>
              <p className={css.list9}>LED screen</p>
            </div>
            <div className={css.btndiv}>
            <Link to="systems">
            <button className={css.btn} >
          Check systems
        </button></Link>
            </div>
          </div>
         
        </div>
        
      </div>
      <div className={css.block4} style={block4Style}>

        <h2 className={css.title4}>Our partners</h2>
       <div className={css.blockmini}>
       <img src={logo1} alt="logo" />
        <img src={logo2} alt="logo" />
        <img src={logo3} alt="logo" />
       </div>

      </div>
    </div>
  );
};

export default HomePage;