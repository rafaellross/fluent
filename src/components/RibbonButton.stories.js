import React from 'react';
import { action } from '@storybook/addon-actions';
import RibbonButton from './RibbonButton';


export default {
  title: 'Ribbon/Button',
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

export const Button = () => buttons.map((button) =>(<RibbonButton {...button}/>));
