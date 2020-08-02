// import React from "react";
// import { Circle, Popup } from "leaflet";
import numeral from "numeral";

// const casesTypeColors = {
//     cases: {
//         hex: "#cc1034",
//         multiplier: 800,
//     },
//     recovered: {
//         hex: "#7dd71d",
//         multiplier: 1200,
//     },
//     deaths: {
//         hex: "#fb4443",
//         multiplier: 2000,
//     },
// };

export const sortData = (data) => {
    const sortedData = [...data];
    // sortedData.sort((a, b) => {
    //     if(a.cases > b.cases) {
    //         return -1;
    //     }else {
    //         return 1;
    //     }
    // });
    // return sortedData;
    return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};

// export const showDataOnMap = (data, casesType = 'cases') => 
//     data.map((country) => (
//         <Circle 
//             center={[country.countryInfo.lat, country.countryInfo.long]}
//             fillOpacity={0.4}
//             color={casesTypeColors[casesType].hex}
//             fillColor={casesTypeColors[casesType].hex}
//             radius={
//                 Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
//             }
//         >
//             <Popup>
//                 <h1>i am popup</h1>
//             </Popup>
//         </Circle>
//     ))

export const prettyPrintStat = (stat) => stat ? `+${numeral(stat).format("0.0a")}` : "+0";
