// import { PageContainer } from '@ant-design/pro-components';
// import { useModel } from '@umijs/max';
import { Drawer } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import './index.less';
// import type Map from "@types/leaflet";
import L, { Map } from 'leaflet';
// import markerIcon from 'leaflet/dist/images/marker-icon.png';
const markerIcon = require('leaflet/dist/images/marker-icon.png');
import 'leaflet/dist/leaflet.css';

const GisMap: React.FC = () => {
  // const { token } = theme.useToken();
  // const { initialState } = useModel('@@initialState');
  const mapRef = useRef<any>();
  const [map, setMap] = useState<Map>();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  // const
  const [markData] = useState<any[]>([
    {
      type: 'point',
      coord: [36.377637, -120.642449],
      name: 'Q1',
      MW: '100',
      hub: 'NP15',
      project: 'flatland',
      county: 'king',
      state: 'CA',
      COD: '2025',
    },
    {
      type: 'point',
      coord: [36.971123, -119.129794],
      name: 'Q2',
      MW: '200',
      hub: 'SP15',
      project: 'cypress',
      county: 'henrico',
      state: 'CA',
      COD: '2026',
    },
    {
      type: 'point',
      coord: [37.465973, -120.249976],
      name: 'Q3',
      MW: '300',
      hub: 'ZP26',
      project: 'kingstone press',
      county: 'henrico',
      state: 'queue',
      COD: '2024',
    },
    {
      type: 'polygon',
      coord: [
        [35.049683, -118.543644],
        [35.011913, -118.518787],
        [35.008184, -118.599445],
      ],
      MW: '400',
      hub: 'NP15',
      project: 'crystal farm',
      county: 'envy',
      state: 'CA',
      COD: '2030',
      name: 'Q4',
    },
  ]);
  // const [cashFlowData, setCashFlowData] = useState<any[]>([
  //   {
  //     type: 'point',
  //     data: [0, 0, -150, 15, 20, 24, 25, 20, 21, 22, 23, 16, 5, 0],
  //     name: 'Q1',
  //   },
  //   {
  //     type: 'point',
  //     data: [0, 0, 0, -280, 30, 31, 32, 28, 25, 36, 34, 31, 22, 27],
  //     name: 'Q2',
  //   },
  //   {
  //     type: 'point',
  //     data: [0, -400, 60, 60, 70, 70, 80, 50, 40, 60, 80, 30, 0, 0],
  //     name: 'Q3',
  //   },
  //   {
  //     type: 'polygon',
  //     data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     name: 'Q4',
  //   },
  // ]);
  useEffect(() => {
    let currentMap;
    if (map) {
      currentMap = map;
    } else {
      currentMap = L.map('map').setView([36.377637, -120.642449], 10);
      setMap(currentMap);
    }
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(currentMap);

    return () => {
      map?.remove();
    };
  }, []);

  function renderMarks() {
    markData.forEach(({ type, coord }) => {
      switch (type) {
        case 'point': {
          // var marker = L.circleMarker(coord, {
          //   color: '#000', //线颜色
          //   weight: 5, //线宽度
          //   opacity: 1, //透明度
          //   fillColor: '#00e400', //填充色
          //   fillOpacity: 0.5, //填充透明度
          //   radius: 20, //半径
          // }).addTo(map!);
          const marker = L.marker(coord, { icon: L.icon({ iconUrl: markerIcon }) }).addTo(map!);
          marker.on('click', () => {
            // alert(33);
            setDrawerOpen(true);
          });
          break;
        }
        case 'polygon': {
          const polygon = L.polygon(coord).addTo(map!);
          polygon.on('click', () => {
            setDrawerOpen(true);
          });
          break;
        }
      }
    });
  }
  useEffect(() => {
    if (map) {
      renderMarks();
    }
  }, [map]);

  return (
    <>
      <div ref={mapRef} id="map" className="h-full overflow-hidden"></div>
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}></Drawer>
    </>
    // <PageContainer className="h-full">

    // </PageContainer>
  );
};

export default GisMap;
