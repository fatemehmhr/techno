import './SidebarSearchPage.scss';
import { Alert } from 'antd';
import { Switch } from 'antd';

const SidebarSearchPage = () => {

   

      
    return(
       <div className='SidebarSearchPage'>
       
            <div className='SidebarSearchPage-box'>
                
                <Alert
                    // message="Error Text"
                    description="برای مشاهده قیمت تمام شده تاریخ ورود و خروج خود را انتخاب کنید"
                    type="error"
                    style={{
                        margin:'10px',
                        textAlign:'right',
                        background:'red !important',
                        color:' #e23636'
                    }}
                /> 
            </div>



            <div className='box-sidebar'>
                <div className='box-sidebar-date' >
                    <div>
                        {/* <img src='' /> */}
                        <p>تاریخ ورود و خروج</p>
                    </div>

                    <div>
                        <i />
                    </div>
                </div>










                <div className='box-sidebar-person'>تعداد نفرات</div>
            </div>
       </div>
    )
}
export default SidebarSearchPage;