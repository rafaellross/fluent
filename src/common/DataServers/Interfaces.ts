export interface IDataServer {
    name: string;
    title: string;
    iconName: string;
    headerText: string;
}

export interface ITab {
    tab: object
}



export interface IAction {
    action: () => any
}

export interface IButton {

}

export interface IToolBar {
    add: IAction;
    edit: IAction;
    refresh: IAction;
    search: IAction;
    columns: IAction;
    print: IAction;


}

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
