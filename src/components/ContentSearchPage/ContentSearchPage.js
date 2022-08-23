import './ContentSearchPage.scss';
import { Switch } from 'antd';
import { useState } from 'react';
import Card from '../Card/Card';
import { Pagination } from 'antd';


const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

    

const ContentSearchPage = () => {

    // const [disabled, setDisabled] = useState(true)
  
    // const toggle = () => {
    //   setDisabled(!disabled);
    // };
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
      };

      const items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]

    return(
        <div className='ContentSearchPage'>
            <div className='header-content-body' >
                <div className='header-content-location'>
                    <div className='header-content-location-left '>
                        <Switch   onClick={onChange}  />
                        <span>غیر فعال</span>
                    </div>
                    <div className='header-content-location-right'>
                        {/* <img /> set logo */}
                        <span>نمایش منطق اطراف تهران</span>
                    </div>
                </div>
                <div className='header-content-switch'>
                    <div className='switch'>
                        <Switch  onClick={onChange} />
                        <span>اتاقک پرایم</span>
                    </div>
                    <div className='switch'>
                        <Switch   onClick={onChange}  />
                        <span>رزرو آنی</span>
                    </div>
                </div>
            </div>
            <hr />

            <div className='header-content-order'>
                <div className='map'>
                    {/* <img src='' /> */}
                    نقشه
                </div>
                <div className='order'>

                    <div className='order-list'>
                        <div className='order-list-item'>بهترین های اخیر</div>
                        <div className='order-list-item'>بیشترین قیمت</div>
                        <div className='order-list-item'>کمترین قیمت</div>
                        <div className='order-list-item select'>پیشنهاد اتاقک</div>
                    </div>
                    <div className='sort-priority'>
                        <span >
                            :
                            {/* <img  /> */}
                            مرتب سازی با اولویت
                        </span>
                    </div>
                </div>
            </div>
            

            <div className='content-card'>
                {
                    items.map((item,index) => {
                        return(
                            <Card
                            style={{margin:'10px !important'}}
                            item={item} />
                            
                        )
                    }) 
                }
            </div>
            <div className="pagination">
                <Pagination
                defaultCurrent={1}
                total={50}
                // style={{borderRadius:'100% !important'}}
                />
            </div>
            
        </div>
    )
}
export default ContentSearchPage;