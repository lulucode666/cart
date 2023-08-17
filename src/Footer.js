import React from 'react'
import './footer.css'


// 頁尾元件
const Footer = () => {

    const imgArr = ["https://miro.medium.com/v2/resize:fit:952/1*JhfgzVXA0lvAIGIfRICRfA.gif",
        "https://camo.githubusercontent.com/26039bc8d348cd17e2d45ed19b937bd8226971b119dc6d1be71a8888f7489fd2/68747470733a2f2f6d65646961302e67697068792e636f6d2f6d656469612f6c6e377a32655772696951416c6c6656636e2f736f757263652e676966",
        "https://raw.githubusercontent.com/otomer/otomer/master/assets/html.gif"];

    return (
        // <!-- Footer-->
        <footer className="Box" style={{backgroundColor: "#212529" }}>
            {/* <div className=" text-center text-white w-100  m-auto" style={{ backgroundColor: "#000000" }}> */}
                <div className="footer" style={{ fontSize: "0.9rem" }} >版權所有 &copy; 花生工作室 2023</div>
            {/* </div> */}
        </footer>



    );
};

export default Footer;