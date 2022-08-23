import "./SidebarSearchPage.scss";
import { Alert } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styled from 'styled-components';
import { useState } from "react";
// import { BsDoorOpen } from "react-icons/md";



const Main = styled("div")`
  font-family: sans-serif;
  
  
  
`;

const DropDownContainer = styled("div")`
  margin: 0 auto;
  align-items: center;
  
`;

const DropDownHeader = styled("div")`
  padding: 0.8em 2em 0.8em 1em;
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
  display:flex;
  justify-content: space-between;
  align-items: center;
  color:black;
  
`;

const DropDownListContainer = styled("div")`
  position:relative;
  
  
`;

const DropDownList = styled("ul")`
  width:600px;
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  position: absolute;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;





const SidebarSearchPage = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  

  const toggling = () => setIsOpen(!isOpen);
  const toggling2 = () => setIsOpen2(!isOpen2);
  const toggling3 = () => setIsOpen3(!isOpen3);
  const toggling4 = () => setIsOpen4(!isOpen4);
  const toggling5 = () => setIsOpen5(!isOpen5);
  const toggling6 = () => setIsOpen6(!isOpen6);
  const toggling7 = () => setIsOpen7(!isOpen7);




  return (
    <div className="SidebarSearchPage">
      <div className="SidebarSearchPage-box">
        <Alert
          description="برای مشاهده قیمت تمام شده تاریخ ورود و خروج خود را انتخاب کنید"
          type="error"
          style={{
            margin: "0 0 10px 0",
            textAlign: "right",
            background: "red !important",
            color: " #e23636",
            width: "100%",
          }}
        />
      </div>
{/* ////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="box-sidebar">

        
          <Main>
            <DropDownContainer style={{borderBottom:'1px solid black'}}>
              <DropDownHeader onClick={toggling}>
              <DownOutlined />
              {/* <img /> */}
                تاریخ ورود و خروج
              </DropDownHeader>
              {isOpen && (
                <DropDownListContainer  >
                  <DropDownList>
                    <ListItem>Mangoes</ListItem>
                    <ListItem>Apples</ListItem>
                    <ListItem>Oranges</ListItem>
                  </DropDownList>
                </DropDownListContainer>
              )}
            </DropDownContainer>
         </Main>




         <Main >
            <DropDownContainer  >
              <DropDownHeader onClick={toggling2}>
              <DownOutlined />
              {/* <img /> */}
                تعداد نفرات
              </DropDownHeader>
              {isOpen2 && (
                <DropDownListContainer>
                  <DropDownList>
                    <ListItem>nnnnn</ListItem>
                    <ListItem>,,,,,</ListItem>
                    <ListItem>ooooo</ListItem>
                  </DropDownList>
                </DropDownListContainer>
              )}
            </DropDownContainer>
         </Main>

      </div>
{/* ////////////////////////////////////////////////////////////////////////////////////// */}
        <div className="box-sidebar" style={{margin:'40px 0 0 0'}}>
          <Main>
              <DropDownContainer >
                <DropDownHeader onClick={toggling3}>
                <DownOutlined />
                {/* <img /> */}
                  قیمت
                </DropDownHeader>
                {isOpen3 && (
                  <DropDownListContainer>
                    <DropDownList>
                      <ListItem>1111</ListItem>
                      <ListItem>۲۲۲۲</ListItem>
                      <ListItem>۳۳۳۳</ListItem>
                    </DropDownList>
                  </DropDownListContainer>
                )}
              </DropDownContainer>
            </Main>
        </div>

{/* ////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="box-sidebar" style={{margin:'40px 0 0 0'}}>
        <Main>
              <DropDownContainer style={{borderBottom:'1px solid black'}}>
                <DropDownHeader onClick={toggling4}>
                <DownOutlined />
                {/* <img /> */}
                  نوع اقامتگاه
                </DropDownHeader>
                {isOpen4 && (
                  <DropDownListContainer>
                    <DropDownList>
                      <ListItem>1111</ListItem>
                      <ListItem>۲۲۲۲</ListItem>
                      <ListItem>۳۳۳۳</ListItem>
                    </DropDownList>
                  </DropDownListContainer>
                )}
              </DropDownContainer>
            </Main>
          




            <Main>
              <DropDownContainer style={{borderBottom:'1px solid black'}}>
                <DropDownHeader onClick={toggling5}>
                <DownOutlined />
                {/* <img /> */}
                  تعداد اتاق خواب
                </DropDownHeader>
                {isOpen5 && (
                  <DropDownListContainer>
                    <DropDownList>
                      <ListItem>1111</ListItem>
                      <ListItem>۲۲۲۲</ListItem>
                      <ListItem>۳۳۳۳</ListItem>
                    </DropDownList>
                  </DropDownListContainer>
                )}
              </DropDownContainer>
            </Main>




            <Main>
              <DropDownContainer >
                <DropDownHeader onClick={toggling6}>
                <DownOutlined />
                {/* <img /> */}
                  تعداد تخت خواب
                </DropDownHeader>
                {isOpen6 && (
                  <DropDownListContainer>
                    <DropDownList>
                      <ListItem>1111</ListItem>
                      <ListItem>۲۲۲۲</ListItem>
                      <ListItem>۳۳۳۳</ListItem>
                    </DropDownList>
                  </DropDownListContainer>
                )}
              </DropDownContainer>
            </Main>



      </div>
{/* ////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="box-sidebar" style={{margin:'40px 0 0 0'}}>
           <Main>
              <DropDownContainer >
                <DropDownHeader onClick={toggling6}>
                <DownOutlined />
                {/* <img /> */}
                  فیلترهای بیشتر
                </DropDownHeader>
                {isOpen6 && (
                  <DropDownListContainer>
                    <DropDownList>
                      <ListItem>1111</ListItem>
                      <ListItem>۲۲۲۲</ListItem>
                      <ListItem>۳۳۳۳</ListItem>
                    </DropDownList>
                  </DropDownListContainer>
                )}
              </DropDownContainer>
            </Main>
      </div>
    </div>
  );
};
export default SidebarSearchPage;
