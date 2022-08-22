import './HeaderSliderContainer.scss';
import React from "react";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Card from '../Card/Card';


const HeaderSliderContainer = (props) => {
    const slides = [1,2,3,4,5,6,7,8];

    const slideLeft = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft+500;
    }

    const slideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft-500;
    }

    return(
        <div className='header-slider-container'>
            <div className='header-slider-container-arrow'>
                <div className='header-slider-title'>
                    <div>
                        <div>
                            {/* <img /> */}
                        </div>
                        <div>
                           <h3 style={{fontSize:'24px'}}> اتاقک پرایم</h3>
                        </div>
                    </div>
                   <div className='header-slider-title-des-container'>
                   <div>
                            <a className='observe'>
                            مشاهده همه
                            </a>
                        </div>
                        <div className='header-slider-title-des'>
                            <span style={{fontSize:'16px'}} >راحتی خیال شما با اقامتگاه‌های منتخب و آنی به همراه بسته بهداشتی سپید</span>
                        </div>
                        
                   </div>
                </div>



{/* ////////////////////////////////////////////////////////////////////////////////// */}


                <div className='all-card'>
                    <div className='main-slider'>
                        <MdChevronLeft size={40} className='slider-icon left' onClick={slideLeft} />
                        <div id="slider">
                           { 
                           slides.map((slide,index) =>{
                                return(
                                    <>
                                        <Card />
                                    </>   
                                    )

                            })
                            }
                        </div>
                        <MdChevronRight size={40} className='slider-icon right' onClick={slideRight} />
                    </div>

                    

 {/* ////////////////////////////////////////////////////////////////////////////////// */}                 




                </div>
            </div>
        </div>
    )
}
export default HeaderSliderContainer;