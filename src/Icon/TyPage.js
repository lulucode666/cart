import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import React, { useState, useEffect } from 'react';
import Axios from "axios";
import L from "leaflet";

function TyPage() {
    const targetUrl = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/W-C0034-005?Authorization=rdec-key-123-45678-011121314";
    const [analysisData, setAnalysisData] = useState([]);//裝analysisData的fix裡面的陣列
    const [forecastData, setForecastData] = useState([]);//裝forecastData的fix裡面的陣列
    const [tyName, setTyName] = useState("");//裝颱風的名字

    useEffect(() => {
        //用useEffect讓set裡面的值有變動的時候就更新頁面
        Axios.get(targetUrl).then((res) => {
            //先找出資料中你要找的資料的物件,取records下的tropicalCyclones的tropicalCyclone
            const tropicalCyclone = res.data.records.tropicalCyclones.tropicalCyclone[0];
            //測試抓到的是不是自己要的資料
            console.log(tropicalCyclone.analysisData.fix);
            console.log(tropicalCyclone.forecastData.fix);
            console.log('颱風名稱:' + tropicalCyclone.cwbTyphoonName);
            //新的資料要抓API中analysisData中的fix陣列
            setAnalysisData(tropicalCyclone.analysisData.fix);
            setForecastData(tropicalCyclone.forecastData.fix);
            setTyName(tropicalCyclone.typhoonName + tropicalCyclone.cwbTyphoonName);//cwbTyphoonName是颱風的中文名稱
        });
    }, []);

    // 定義 Leaflet 圖標 icon
    const typhoonIcon = L.icon({
        iconUrl: "/images/i-logo.png",
        iconSize: [75, 75],
    });

    const foreCastIcon = new L.Icon({
        iconUrl: "/images/i-loo.png",
        iconSize: [100, 80],
    })

    return (
        <div className="wrapper2">
            <div className='d-flex' style={{ minHeight: '100vh',textAlign:'center',borderRadius:'30' }}>
            {/* 使用react-leaflet的套件 */}
            {/* center是緯經度,scrollWheelZoom你在滑動滾輪時會不會控制到地圖大小,
            zoom值越小看到的越近,style是限制地圖大小在視窗範圍??*/}
            <MapContainer center={[23.5, 121]} zoom={5} scrollWheelZoom={false}
                style={{ width: "100vw", height: "100vh"}}>
                {/* 引用地圖的套件 */}
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* 顯示目前颱風的路徑 */}
                {analysisData && analysisData.length > 0 &&
                    analysisData.map((data, index, arr) => {
                        //用split去分開API資料中的coordinate欄位的資料取經緯度
                        const coordinate = data.coordinate.split(',')
                        //抓出緯度
                        const lat = coordinate[1]
                        //抓出經度
                        const lng = coordinate[0]

                        return (
                            // Marker是用來標記地圖上的圖片(颱風)位置
                            // position是圖標的緯經度 
                            <Marker position={[lat, lng]} icon={typhoonIcon} opacity={0.3} >
                                {/* Tooltip可顯示此元素相關的附加資訊的標記等,滑鼠移過去就會看到此標記
                                若加入permanent屬性,此標記就會一直顯示在畫面 */}
                                <Tooltip direction="top" offset={[0, -30]} opacity={1}>
                                    {tyName}
                                </Tooltip>
                            </Marker>
                        )
                    })
                }
                {/* 預測颱風路徑 */}
                {/* 沒有forecastData畫面也沒有明顯變化,為啥要取這邊的資料?
                為什麼跟analysisData的寫法不一樣? */}
                {forecastData && forecastData.length > 0 &&
                    forecastData.map((data) => {
                        const coordinate = data.coordinate.split(',')
                        const lat = coordinate[1]
                        const lng = coordinate[0]
                        return (
                            <Marker position={[lat, lng]} icon={foreCastIcon} opacity={0.7} >
                            <Tooltip direction="top" offset={[0, -30]} opacity={1}>
                                    {tyName}
                                </Tooltip>
                            </Marker>
                        )
                    })
                }
            </MapContainer>
        </div>
        </div>
    );
}

export default TyPage;
