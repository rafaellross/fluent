import React, { useState } from 'react'
import Ribbon from "../components/Ribbon";
import DataGrid from '../components/DataGrid';
import { ClientData } from "../common/DataServers/ClientData.ts";
import { EstimateData } from '../common/DataServers/EstimateData.tsx';
import { ReportData } from '../common/DataServers/ReportData.ts';
import { SettingsData } from '../common/DataServers/SettingData.ts';

const tabs = [
    {
      headerText: "Estimating",
      dataServers: [
        new EstimateData(),
        new ClientData(),
        new ReportData
      ]
    },
    {
      headerText: "Global",
      dataServers: [
        new SettingsData()
      ]
    }
  ];

const ribbonItems = [
    {
        headerText: "Estimating",
        buttons: [
          {
            iconName: "BulletedList",
            title: "Estimates",
            onClick: () => console.log("Clicked Estimates"),
            tab: {
              title: "Estimates",
              key: "estimates",
              toolbar: {
                add: {
                  action: () => console.log('New'),
                  disabled: false
                },
                edit: {
                  action: () => console.log('Edit')
                },
                refresh: {
                  action: () => console.log('Refresh')
                },
                search: {
                  action: () => console.log('Search')
                },
                columns: {
                  action: () => console.log('Columns')
                },
                print: {
                  action: () => console.log('Print')
                },
                attachments: {
                  items: [
                    {
                    key: 'attachment',
                    text: "Attachment1",
                    onClick: console.log('Attachmnent1')
                  },
                  {
                    key: 'attachment',
                    text: "Attachment2",
                    onClick: console.log('Attachmnent2')
                  }]
                },
                processes: {
                  items: [
                    {
                    key: 'proccess1',
                    text: "Process1",
                    onClick: console.log('Process1')
                  },
                  {
                    key: 'proccess2',
                    text: "Process2",
                    onClick: console.log('Process2')
                  }]
                },
                processes: {
                  items: [
                    {
                    key: 'proccess1',
                    text: "Process1",
                    onClick: console.log('Process1')
                  },
                  {
                    key: 'proccess2',
                    text: "Process2",
                    onClick: console.log('Process2')
                  }
                  ]
                },
                filters: {
                  items: [
                    {
                    key: 'filter1',
                    text: "Filter1",
                    onClick: console.log('Filter1')
                  },
                  {
                    key: 'filter2',
                    text: "Filter2",
                    onClick: console.log('Filter2')
                  }
                  ]
                }
              },
              content: <DataGrid/>
            },
          },
          {
            iconName: "BusinessCenterLogo",
            title: "Clients",
            onClick: () => console.log("Clicked Clients"),
            tab: {
              title: "Clients",
              key: "clients",
              toolbar: {
                add: {
                  action: console.log('New'),
                  disabled: false
                },
                edit: {
                  action: () => console.log('Edit')
                },
                refresh: {
                  action: () => console.log('Refresh')
                },
                search: {
                  action: () => console.log('Search')
                },
                columns: {
                  action: () => console.log('Columns')
                },
                print: {
                  action: () => console.log('Print')
                },
                attachments: {
                  items: [
                    {
                    key: 'attachment',
                    text: "Attachment1",
                    onClick: console.log('Attachmnent1')
                  },
                  {
                    key: 'attachment',
                    text: "Attachment2",
                    onClick: console.log('Attachmnent2')
                  }]
                },
                processes: {
                  items: [
                    {
                    key: 'proccess1',
                    text: "Process1",
                    onClick: console.log('Process1')
                  },
                  {
                    key: 'proccess2',
                    text: "Process2",
                    onClick: console.log('Process2')
                  }]
                },
                processes: {
                  items: [
                    {
                    key: 'proccess1',
                    text: "Process1",
                    onClick: console.log('Process1')
                  },
                  {
                    key: 'proccess2',
                    text: "Process2",
                    onClick: console.log('Process2')
                  }
                  ]
                },
                filters: {
                  items: [
                    {
                    key: 'filter1',
                    text: "Filter1",
                    onClick: console.log('Filter1')
                  },
                  {
                    key: 'filter2',
                    text: "Filter2",
                    onClick: console.log('Filter2')
                  }
                  ]
                }
              },
              content: <DataGrid/>
            },

          },
          {
            iconName: "ReportLibrary",
            title: "Reports",
            onClick: () => console.log("Clicked Reports"),
            tab: {
              title: "Reports",
              key: "reports",
              toolbar: {
                add: {
                  action: console.log('New'),
                  disabled: false
                },
                edit: {
                  action: () => console.log('Edit')
                },
                refresh: {
                  action: () => console.log('Refresh')
                },
                search: {
                  action: () => console.log('Search')
                },
                columns: {
                  action: () => console.log('Columns')
                },
                print: {
                  action: () => console.log('Print')
                },
                attachments: {
                  items: [
                    {
                    key: 'attachment',
                    text: "Attachment1",
                    onClick: console.log('Attachmnent1')
                  },
                  {
                    key: 'attachment',
                    text: "Attachment2",
                    onClick: console.log('Attachmnent2')
                  }]
                },
                processes: {
                  items: [
                    {
                    key: 'proccess1',
                    text: "Process1",
                    onClick: console.log('Process1')
                  },
                  {
                    key: 'proccess2',
                    text: "Process2",
                    onClick: console.log('Process2')
                  }]
                },
                processes: {
                  items: [
                    {
                    key: 'proccess1',
                    text: "Process1",
                    onClick: console.log('Process1')
                  },
                  {
                    key: 'proccess2',
                    text: "Process2",
                    onClick: console.log('Process2')
                  }
                  ]
                },
                filters: {
                  items: [
                    {
                    key: 'filter1',
                    text: "Filter1",
                    onClick: console.log('Filter1')
                  },
                  {
                    key: 'filter2',
                    text: "Filter2",
                    onClick: console.log('Filter2')
                  }
                  ]
                }
              },
              content: <DataGrid/>
            },

          },

        ]
    },
    {
        headerText: "Global",
        buttons: [
          {
            iconName: "Settings",
            title: "Settings",
            onClick: () => console.log("Clicked Settings"),
            tab: {
              title: "Settings",
              key: "settings",
              toolbar: {
                add: {
                  action: () => console.log('New'),
                  disabled: false
                },
                edit: {
                  action: () => console.log('Edit')
                },
                refresh: {
                  action: () => console.log('Refresh')
                },
                search: {
                  action: () => console.log('Search')
                },
                columns: {
                  action: () => console.log('Columns')
                },
                print: {
                  action: () => console.log('Print')
                },
                attachments: {
                  items: [
                    {
                    key: 'attachment',
                    text: "Attachment1",
                    onClick: console.log('Attachmnent1')
                  },
                  {
                    key: 'attachment',
                    text: "Attachment2",
                    onClick: console.log('Attachmnent2')
                  }]
                },
                processes: {
                  items: [
                    {
                    key: 'proccess1',
                    text: "Process1",
                    onClick: console.log('Process1')
                  },
                  {
                    key: 'proccess2',
                    text: "Process2",
                    onClick: console.log('Process2')
                  }]
                },
                processes: {
                  items: [
                    {
                    key: 'proccess1',
                    text: "Process1",
                    onClick: console.log('Process1')
                  },
                  {
                    key: 'proccess2',
                    text: "Process2",
                    onClick: console.log('Process2')
                  }
                  ]
                },
                filters: {
                  items: [
                    {
                    key: 'filter1',
                    text: "Filter1",
                    onClick: console.log('Filter1')
                  },
                  {
                    key: 'filter2',
                    text: "Filter2",
                    onClick: console.log('Filter2')
                  }
                  ]
                }
              }
            },

          }
        ]
} ]

export default function Main() {
    const [pages, setPages] = useState([])
    return (
        <>
            <Ribbon tabs={tabs}/>
        </>
    )
}
