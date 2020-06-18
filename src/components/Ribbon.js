import React from 'react'
import PropTypes from 'prop-types'
import { Label, ILabelStyles } from 'office-ui-fabric-react/lib/Label';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { IStyleSet } from 'office-ui-fabric-react/lib/Styling';
import { initializeIcons } from '@uifabric/icons';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import RibbonButton from './RibbonButton';
import { IContextualMenuProps, Stack, IStackTokens } from 'office-ui-fabric-react';
import { Tabs } from 'antd';
import Page from './Page';

const { TabPane } = Tabs;

const initialPanes = [
  { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
  { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
  {
    title: 'Tab 3',
    content: 'Content of Tab 3',
    key: '3',
    closable: false,
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

  const verticalStyle = {
    root: {
        height: '200px',
        border: '10px solid black',
        fontFamily: 'Monaco, Menlo, Consolas',
        fontSize: '30px',
    }


  };

export default function Ribbon(props) {
  return (
    <React.Fragment>
      <Pivot className={pivotClass}>
        {props.tabs.map((tab) =>
          <PivotItem key={tab.headerText} headerText={tab.headerText}>
              {tab.buttons.map((button) => (
                <RibbonButton handleClick={button.onClick} iconName={button.iconName} title={button.title}/>
              ))}
          </PivotItem>
        )}
    </Pivot>
    <Page/>
   </React.Fragment>
  )
}


const menuProps: IContextualMenuProps = {
  items: [
    {
      key: 'emailMessage',
      text: 'Email message',
      iconProps: { iconName: 'Mail' },
    },
    {
      key: 'calendarEvent',
      text: 'Calendar event',
      iconProps: { iconName: 'Calendar' },
    },
  ],
};