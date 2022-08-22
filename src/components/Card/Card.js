import './Card.scss';

const Card = () => {
    return(
        <div className='slider-card'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/2560px-Good_Food_Display_-_NCI_Visuals_Online.jpg' />
            <div className='details'>
                    <h2>اجاره اپارتمان</h2>
                <div>
                    <div className='row-first'>
                        <div>
                            {/* <img />  set icon star*/}
                            <span>4.6</span>
                            <span>(110نظر)</span>
                        </div>
                        <p>
                        {/* <img />     set icon location  */}
                        <span>اجاره در تهران</span>
                        </p>
                    </div>



                    <div className='row-two'>
                        <div>
                            {/* <img />  set icon star*/}
                            <span>۶نفر</span>
                        </div>
                        <p>
                            {/* <img />     set icon location  */}
                            <span>۲اتاق خواب</span>
                        </p>
                    </div>
                                                

                    <div className='row-end'>
                        {/* <img _ngcontent-serverapp-c168="" alt="instant" width="51px" height="27px" src="/assets/images/room-box/prime-badge.svg" class="instant ng-star-inserted" /> */}
                            <div className='price'>
                                <span>از</span>
                                <span>500</span>
                                <span>تومان</span>
                            </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default Card;