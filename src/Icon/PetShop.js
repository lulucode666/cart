// import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import React, { useState, useEffect } from 'react';
// import Axios from "axios";
// import L from "leaflet";
// import Geocode from 'react-geocode';

// function PetShop() {
//     // const targetUrl = "https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=fNT9RMo8PQRO&IsTransData=1";
//     // const [catLegalAddress, setCatLegalAddress] = useState([]);
//     // const [legalname, setLegalname] = useState('');
    

//     useEffect(() => {
//         Axios.get(targetUrl)
//             .then(res => res.json())
//             .then(data => {
//                 const catPetShops = data.filter(item => item.animaltype.includes('貓'))
//                     .map(item => item.legaladdress);
//                 setCatLegalAddress(catPetShops);
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []);

//     const catIcon = L.icon({
//         iconUrl: "/images/i-logo.png",
//         iconSize: [25, 20],
//     });


//     return (
//         <div>
//             <MapContainer center={[23.5, 121]} zoom={7} scrollWheelZoom={false}
//                 style={{ width: "100vw", height: "100vh" }}>
//                 <TileLayer
//                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />
//                 return (
//                 <Marker position={[23.5, 121]} icon={catIcon} opacity={0.3} >
//                     {/* Tooltip可顯示此元素相關的附加資訊的標記等,滑鼠移過去就會看到此標記
//                                 若加入permanent屬性,此標記就會一直顯示在畫面 */}
//                     <Tooltip direction="top" offset={[0, -30]} opacity={1}>
//                         {legalname}
//                     </Tooltip>
//                 </Marker>
//                 )
//             </MapContainer>
//         </div>
//     );
// }

// export default PetShop;
