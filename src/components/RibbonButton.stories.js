import React from 'react';
import { action } from '@storybook/addon-actions';
import RibbonButton from './RibbonButton';


export default {
  title: 'Components/Button',
  component: RibbonButton,
};


const buttons = [
      {
        iconName: "BulletedList",
        title: "Estimates",
        onClick: action("Clicked Estimates")
      },
      {
        iconName: "BusinessCenterLogo",
        title: "Clients",
        onClick: action("Clicked Clients")
      },
      {
        iconName: "ReportLibrary",
        title: "Reports",
        onClick: action("Clicked Reports")
      },
 ]

export const Main = () => buttons.map((button) =>(<RibbonButton key={button.title} {...button}/>));
