import './ContentContainer.scss';

const ContentContainer = ({children}) =>{
    return(
        <div className='ContentContainer'>
            {children}
        </div>
    )
}
export default ContentContainer;