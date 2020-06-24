import React from 'react'
import PropTypes from 'prop-types'
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { initializeIcons } from '@uifabric/icons';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import RibbonButton from './RibbonButton';
import { Tabs, Button } from 'antd';
import 'antd/dist/antd.css';
import ToolBar from './ToolBar';
const { TabPane } = Tabs;

const initialPanes = [
  { title: 'Tab 1', content: 'Content of Tab 11', key: '1' },
  { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
  {
    title: 'Tab 3',
    content: 'Content of Tab 3',
    key: '3'
  },
];
initializeIcons();

const labelStyles =  {
  root: { marginTop: 10 },
};

const iconClass = mergeStyles({
    fontSize: 40,
    height: 50,
    width: '40',
    margin: '0 25px',
  });

  const pivotClass = mergeStyles({
      height: 160,
      border: '1px solid black'

  })
  export const buttonsData = {
    add: {
      action: () => alert('New'),
      disabled: false
    },
    edit: {
      action: () => alert('Edit')
    },
    refresh: {
      action: () => alert('Refresh')
    },
    search: {
      action: () => alert('Search')
    },
    columns: {
      action: () => alert('Columns')
    },
    print: {
      action: () => alert('Print')
    },
    attachments: {
      items: [
        {
        key: 'attachment1',
        text: "Attachment1",
        onClick: () => alert('Attachmnent1')
      },
      {
        key: 'attachment2',
        text: "Attachment2",
        onClick: () => alert('Attachmnent2')
      }]
    },
    processes: {
      items: [
        {
        key: 'proccess1',
        text: "Process1",
        onClick: () => alert('Process1')
      },
      {
        key: 'proccess2',
        text: "Process2",
        onClick: () => alert('Process2')
      }]
    },
    processes: {
      items: [
        {
        key: 'proccess1',
        text: "Process1",
        onClick: () => alert('Process1')
      },
      {
        key: 'proccess2',
        text: "Process2",
        onClick: () => alert('Process2')
      }
      ]
    },
    filters: {
      items: [
        {
        key: 'filter1',
        text: "Filter1",
        onClick: () => alert('Filter1')
      },
      {
        key: 'filter2',
        text: "Filter2",
        onClick: () => alert('Filter2')
      }
      ]
    }
  };

  const operations = <Button>Extra Action</Button>;
export default class Ribbon extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      activeKey: initialPanes[0].key,
      panes: [],
    };
    this.addTab = this.addTab.bind(this)

  }

  onChange = activeKey => {
    this.setState({ activeKey });
  };

  remove = targetKey => {
    const { panes, activeKey } = this.state;
    let newActiveKey = activeKey;
    let lastIndex;
    panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = panes.filter(pane => pane.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    this.setState({
      panes: newPanes,
      activeKey: newActiveKey,
    });
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  addTab = (dataServer) => {
    console.log(dataServer)
    if (this.state.panes.find(pane => pane.key === dataServer.name)) {
      this.setState({ activeKey: dataServer.name});
    } else {
      this.setState((state, props) => ({
        panes: [...state.panes, {
            title: dataServer.title,
            toolbar: dataServer.toolbar,
            key: dataServer.name,
            content: null
          }],
        activeKey: dataServer.name
      }));
    }
  }

  render() {
    const { panes, activeKey } = this.state;
    return (
      <>
        <Pivot className={pivotClass}>
          {this.props.tabs.map((tab) =>
            <PivotItem key={tab.headerText} headerText={tab.headerText}>
                {tab.dataServers.map((dataServer) => (
                  <RibbonButton key={dataServer.title} toolbar={dataServer.toolbar} onClick={() => this.addTab(dataServer)} iconName={dataServer.iconName} title={dataServer.title}/>
                ))}
            </PivotItem>
          )}
        </Pivot>
        <Tabs
          type="editable-card"
          onChange={this.onChange}
          activeKey={activeKey}
          onEdit={this.onEdit}
          hideAdd={true}
        >
          {panes.map(pane => (
            <TabPane tab={pane.title} key={pane.key} closable={pane.closable} tabBarExtraContent={operations}>
              <ToolBar {...pane.toolbar}/>
              {pane.content}
            </TabPane>
          ))}
        </Tabs>
      </>
    )

  }
}
