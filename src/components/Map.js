import { useContext } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  GeoJSON,
  Tooltip,
} from "react-leaflet";
import { useState } from "react/cjs/react.development";
import { dataSharingPoint } from "./StateContext";
import TooltipHover from "./TooltipHover";
import Graph from "./Graph";

import "./pop.css";

function Map({ data, userData }) {
  const { setRegion } = useContext(dataSharingPoint);
  const { setUsersPerRegion } = useContext(dataSharingPoint);
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [layerr, setLayer] = useState();

  function totalUsersPerArea(region, layer) {
    const filteredUsersPerRegion = userData?.users?.filter(
      (user) => user.area_id === region.properties.area_id
    );

    setUsersPerRegion(filteredUsersPerRegion);
  }

  const styling = {
    weight: 0.5,
    fillOpacity: 0.4,
  };
  function hoverPopups(layer, event) {
    setLat(event.latlng.lat);
    setLong(event.latlng.lng);

    // if (
    //   event.target.feature.properties.name === layer.feature.properties.name
    // ) {
    //   layer.options.fillColor = "black";
    // } else {
    //   console.log("notiingn");
    // }
    // event.target.setStyle({ fillColor: "red" });
  }

  const eachRegion = (region, layer) => {
    // console.log(layer.options);
    //     click: (event)=>
    //         {
    //       if (counter > 0)
    //       { layerBe.setStyle({ fillOpacity: 0.5 }) }
    // event.target.setStyle({fillOpacity:0.8});              ////// see this code tommroow
    //  layerBe=event.target;
    //  counter=1;
    //         }
    //         });
    if (
      userData?.users?.filter(
        (user) => user.area_id === region.properties.area_id
      ).length > 200
    ) {
      layer.options.fillColor = "green";
    } else {
      layer.options.fillColor = "red";
    }
    layer.on({
      click: (event) => {
        totalUsersPerArea(region, layer);
      },
      mouseover: (event) => {
        hoverPopups(layer, event);
        totalUsersPerArea(region, layer);
        setRegion(region);
      },
    });
  };

  return (
    <div>
      <MapContainer
        center={[12.9716, 77.5946]}
        zoom={11}
        scrollWheelZoom={true}
      >
        <TileLayer
          className="tilelayer"
          attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
          url="https://api.mapbox.com/styles/v1/anishmv/cky2spaic1d6x14p6xiykuu3y/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYW5pc2htdiIsImEiOiJja3h6dmd1MDAydTRkMnJtcHMyM3FyZHRtIn0.XhMwrWO3uiDAVsad-3Xv0Q"
        />
        <GeoJSON
          onEachFeature={eachRegion}
          style={styling}
          data={data.features}
        />
        {lat && long ? (
          <Marker riseOnHover={true} className="marker" position={[lat, long]}>
            <Tooltip
              sticky
              direction="top"
              position={[lat, long]}
              className="tooltip"
            >
              <TooltipHover />
            </Tooltip>
          </Marker>
        ) : (
          ""
        )}
        ;
      </MapContainer>
    </div>
  );
}

export default Map;
//styles

// const StyledPopup = styled(Popup)`
//     background-color:red;
//     border-radius:20px;
// `
