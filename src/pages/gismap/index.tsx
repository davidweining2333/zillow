// import { PageContainer } from '@ant-design/pro-components';
// import { useModel } from '@umijs/max';
import { Descriptions, Drawer, Form, InputNumber, Space } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import './index.less';
// import type Map from "@types/leaflet";
import L, { Map } from 'leaflet';
import ReactECharts from 'echarts-for-react';
// import markerIcon from 'leaflet/dist/images/marker-icon.png';
const markerIcon = require('leaflet/dist/images/marker-icon.png');
import 'leaflet/dist/leaflet.css';
import { cloneDeep } from 'lodash';
import cashflow from '@/data/cashflow.csv';
import GIS from '@/data/GIS.csv';
import queue from '@/data/queue.csv';
import Papa from 'papaparse';

const GisMap: React.FC = () => {
  // const { token } = theme.useToken();
  // const { initialState } = useModel('@@initialState');
  const mapRef = useRef<any>();
  const [map, setMap] = useState<Map>();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [selectedData, setSelectedData] = useState<any>({});
  const [chartOptions, setChartOptions] = useState<any>({
    xAxis: {
      type: 'category',
      data: [
        // '2023',
        // '2024',
        // '2025',
        // '2026',
        // '2027',
        // '2028',
        // '2029',
        // '2030',
        // '2031',
        // '2032',
        // '2033',
        // '2034',
        // '2035',
        // '2036',
      ],
    },
    yAxis: {
      type: 'value',
    },
    tooltip: {
      show: true,
      trigger: 'axis',
    },
    series: [
      {
        // data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
        symbolSize: 0,
        smooth: true,
        itemStyle: {},
        lineStyle: {
          color: '#0df50d',
        },
      },
    ],
  });
  const [markData, setMarkData] = useState<any[]>([
    // {
    //   type: 'POINT',
    //   coord: [36.377637, -120.642449],
    //   name: 'Q1',
    //   MW: '100',
    //   hub: 'NP15',
    //   project: 'flatland',
    //   county: 'king',
    //   state: 'CA',
    //   COD: '2025',
    // },
    // {
    //   type: 'POINT',
    //   coord: [36.971123, -119.129794],
    //   name: 'Q2',
    //   MW: '200',
    //   hub: 'SP15',
    //   project: 'cypress',
    //   county: 'henrico',
    //   state: 'CA',
    //   COD: '2026',
    // },
    // {
    //   type: 'POINT',
    //   coord: [37.465973, -120.249976],
    //   name: 'Q3',
    //   MW: '300',
    //   hub: 'ZP26',
    //   project: 'kingstone press',
    //   county: 'henrico',
    //   state: 'queue',
    //   COD: '2024',
    // },
    // {
    //   type: 'POLYGON',
    //   coord: [
    //     [35.049683, -118.543644],
    //     [35.011913, -118.518787],
    //     [35.008184, -118.599445],
    //   ],
    //   MW: '400',
    //   hub: 'NP15',
    //   project: 'crystal farm',
    //   county: 'envy',
    //   state: 'CA',
    //   COD: '2030',
    //   name: 'Q4',
    // },
  ]);
  const [cashFlowData, setCashFlowData] = useState<any[]>([
    // {
    //   type: 'POINT',
    //   data: [0, 0, -150, 15, 20, 24, 25, 20, 21, 22, 23, 16, 5, 0],
    //   name: 'Q1',
    // },
    // {
    //   type: 'POINT',
    //   data: [0, 0, 0, -280, 30, 31, 32, 28, 25, 36, 34, 31, 22, 27],
    //   name: 'Q2',
    // },
    // {
    //   type: 'POINT',
    //   data: [0, -400, 60, 60, 70, 70, 80, 50, 40, 60, 80, 30, 0, 0],
    //   name: 'Q3',
    // },
    // {
    //   type: 'POLYGON',
    //   data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   name: 'Q4',
    // },
  ]);
  const [baseInfoDescriptionsProps, setBaseInfoDescriptionsProps] = useState<any>();
  const [form] = Form.useForm();
  let baseInfoColumns = [
    { dataIndex: 'name', title: 'Name' },
    { dataIndex: 'MW', title: 'MW' },
    { dataIndex: 'hub', title: 'Hub' },
    { dataIndex: 'project', title: 'Project' },
    { dataIndex: 'county', title: 'County' },
    { dataIndex: 'state', title: 'State' },
    { dataIndex: 'COD', title: 'COD' },
  ];
  async function getData() {
    const results: any[] = await Promise.all([
      new Promise(function (resolve) {
        Papa.parse(cashflow, {
          download: true,
          skipEmptyLines: true,
          complete(results: any) {
            // console.log(results);
            resolve(results);
          },
          // rest of config ...
        });
      }),
      new Promise(function (resolve) {
        Papa.parse(GIS, {
          download: true,
          header: true,
          skipEmptyLines: true,
          complete(results: any) {
            // console.log(results);
            resolve(results);
          },
          // rest of config ...
        });
      }),
      new Promise(function (resolve) {
        Papa.parse(queue, {
          download: true,
          header: true,
          skipEmptyLines: true,
          complete(results: any) {
            // console.log(results);
            resolve(results);
          },
          // rest of config ...
        });
      }),
    ]);
    console.log(results);
    const [cashFlowHeader, ...cashFlowArr] = results[0].data;
    const temp = cloneDeep(chartOptions);
    cashFlowHeader.shift();
    temp.xAxis.data = cashFlowHeader;
    setChartOptions(temp);
    const tempCashFlowData = cashFlowArr.map((itemArr: any[]) => {
      const [name, ...data] = itemArr;
      return {
        name,
        data,
      };
    });
    setCashFlowData(tempCashFlowData);
    const tempMarkData = results[1]?.data?.map((item: any) => {
      const gisArr = item.GIS.match(/(\w+)\s*\((.*)\)/);
      // console.log(gisArr)
      const markerType = gisArr[1];
      const markerCoord =
        markerType == 'POINT'
          ? gisArr[2].split(' ')
          : gisArr[2].split(',').map((item: string) => item.trim().split(' '));
      const nodeData = results?.[2]?.data?.find((i: any) => i.queue == item.queue);
      return {
        name: item.queue,
        type: markerType,
        coord: markerCoord,
        ...nodeData,
      };
    });
    setMarkData(tempMarkData);
  }

  const [monthlyCost, setMonthlyCost] = useState<number>(0);
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
    getData();
    return () => {
      map?.remove();
    };
  }, []);

  function renderMarks() {
    const features: any = [];
    markData.forEach(({ type, coord, ...rest }) => {
      switch (type) {
        case 'POINT': {
          // var marker = L.circleMarker(coord, {
          //   color: '#000', //线颜色
          //   weight: 5, //线宽度
          //   opacity: 1, //透明度
          //   fillColor: '#00e400', //填充色
          //   fillOpacity: 0.5, //填充透明度
          //   radius: 20, //半径
          // }).addTo(map!);
          const marker = L.marker(coord, {
            icon: L.icon({ iconUrl: markerIcon }),
            title: rest.name,
            data: rest,
          }).addTo(map!);
          marker.on('click', markerClick);
          features.push(marker);
          break;
        }
        case 'POLYGON': {
          const polygon = L.polygon(coord, {
            title: rest.name,
            data: rest,
          }).addTo(map!);
          polygon.on('click', markerClick);
          features.push(polygon);
          break;
        }
      }
    });
    map?.fitBounds(L.featureGroup(features).getBounds());
  }

  function markerClick(data: any) {
    setDrawerOpen(true);
    setTimeout(() => {
      setSelectedData(data?.target?.options.data);
      const temp = cloneDeep(chartOptions);
      temp.series[0].data = cashFlowData.find(
        (item) => item.name == data?.target?.options.data.name,
      ).data;
      setChartOptions(temp);
    });
  }
  useEffect(() => {
    if (map && markData?.length) {
      renderMarks();
    }
  }, [map, markData]);

  useEffect(() => {
    if (selectedData?.name) {
      const temp = baseInfoColumns.map((item) => {
        return {
          key: item.dataIndex,
          label: item.title,
          children: selectedData[item.dataIndex],
        };
      });
      setBaseInfoDescriptionsProps(temp);
    }
  }, [selectedData?.name]);
  // useEffect(() => {
  //   if (drawerOpen) {
  //     setTimeout(() => {
  //       setChartOptions(chartOptions);
  //     })
  //   }
  // }, [drawerOpen]);
  return (
    <>
      <div ref={mapRef} id="map" className="h-full overflow-hidden"></div>
      <Drawer
        width={500}
        forceRender
        title={`${selectedData?.name} Info`}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <div>
          <div className="primary-title">Base Info</div>
          <Descriptions title={selectedData.Project} items={baseInfoDescriptionsProps} />
        </div>
        <div style={{ width: '100%' }}>
          <div className="primary-title">Trash Flow Trend</div>
          <ReactECharts option={chartOptions} notMerge={true} lazyUpdate={true}></ReactECharts>
        </div>
        <div className="flex flex-col items-center">
          <div className="primary-title">Monthly cost calculator</div>
          <div className="flex flex-col items-center">
            <span>Estimated monthly cost</span>
            <div>{`$${monthlyCost}`}</div>
            <Form
              form={form}
              name="trigger"
              style={{ maxWidth: 600 }}
              layout="vertical"
              autoComplete="off"
              onValuesChange={(changedValues, allValues) => {
                // if (changedValues.payment) {
                if (changedValues?.payment?.value) {
                  const res = Math.round((changedValues.payment.value / allValues.price) * 100);
                  if (res != allValues.payment.ratio) {
                    form.setFieldValue(['payment', 'ratio'], res);
                  }
                } else if (changedValues?.payment?.ratio) {
                  const res = Math.round((changedValues.payment.ratio * allValues.price) / 100);
                  if (res != allValues.payment.value) {
                    form.setFieldValue(['payment', 'value'], res);
                  }
                } else if (changedValues.price) {
                  const res = Math.round((allValues.payment.ratio * changedValues.price) / 100);
                  if (res != allValues.payment.value) {
                    form.setFieldValue(['payment', 'value'], res);
                  }
                }
                // }
                const res = Math.floor((allValues.price - allValues.payment.value) / 12 / 30);
                setMonthlyCost(res);
              }}
            >
              <Form.Item label="Home price" name="price">
                <InputNumber style={{ width: '100%' }} defaultValue={0} placeholder="Home price" />
              </Form.Item>
              <Form.Item label="Down payment">
                <Space.Compact>
                  <Form.Item name={['payment', 'value']}>
                    <InputNumber
                      defaultValue={0}
                      width={'100%'}
                      addonBefore="$"
                      placeholder="payment"
                    />
                  </Form.Item>
                  <Form.Item name={['payment', 'ratio']}>
                    <InputNumber
                      defaultValue={0}
                      min={0}
                      max={100}
                      addonAfter="%"
                      placeholder="ratio"
                    />
                  </Form.Item>
                </Space.Compact>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Drawer>
    </>
    // <PageContainer className="h-full">
    // </PageContainer>
  );
};

export default GisMap;
