import "./Card.scss";
import { EnvironmentOutlined, StarFilled, TeamOutlined  } from "@ant-design/icons";
// import { CgMoreO } from "@react-icons/all-files/fa/FaBeer";
import { CgMoreO  } from 'react-icons/cg';

const Card = () => {
  return (
    <div className="slider-card">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/2560px-Good_Food_Display_-_NCI_Visuals_Online.jpg" />
      <div className="details">
        <h2>اجاره اپارتمان</h2>
        <div>
          <div className="row-first">
            
            <p>
              {/* <img />     set icon location  */}
              <EnvironmentOutlined style={{ color: "green", marginLeft:'5px'}} />
              <span>اجاره در تهران</span>
            </p>
            <div>
            <StarFilled style={{color:'gold', marginLeft:'5px'}}  />
              <span>4.6</span>
              <span>(110نظر)</span>
            </div>
          </div>

          <div className="row-two">
          <p>
              <CgMoreO style={{color:'green', marginLeft:'5px'}} />
              <span>۲اتاق خواب</span>
            </p>
            <div>
            <TeamOutlined style={{color:'green', marginLeft:'5px'}}/>
              <span>۶نفر</span>
            </div>
            
          </div>

          <div className="row-end" style={{direction:'ltr'}}>
            {/* <img _ngcontent-serverapp-c168="" alt="instant" width="51px" height="27px" src="/assets/images/room-box/prime-badge.svg" class="instant ng-star-inserted" /> */}
            <div className="price" >
              <span>از</span>
              <span>500</span>
              <span>تومان</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
