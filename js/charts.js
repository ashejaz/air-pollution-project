const topTen = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const topTenNames = ["", "", "", "", "", "", "", "", "", ""];
// Fetch air quality data
d3.json('https://api.waqi.info/v2/map/bounds?latlng=-90,-180,90,180&networks=all&token=4a880169279a5068a1ce72938e02e43e7510290b')
    .then((data) => {
        data.data.forEach((station) => {

            const lat = station.lat;
            const lon = station.lon;
            const aqi = parseFloat(station.aqi);
            const name = station.station.name;
            console.log(aqi);
            console.log(name);
            if (!isNaN(aqi)) {
                for (x = 0; x < topTen.length; x++) {
                    if (topTen[x] < aqi) {
                        topTen[x] = aqi;
                        topTenNames[x] = name;
                    break;}
                    
                }
            }

        });
        console.log(topTen);
        console.log(topTenNames);
        let trace1 = {
            x:topTenNames,
            y:topTen,
            type: "bar"
          };
        
        // Data trace array
        let traceData = [trace1];
        
        // Apply the group barmode to the layout
        let layout = {
          title: "Top Ten Polluted"
        };
        
        // Render the plot to the div tag with id "plot"
        Plotly.newPlot("chart", traceData, layout);
        });
