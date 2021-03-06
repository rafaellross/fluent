import React from 'react';
import { action } from '@storybook/addon-actions';
import Ribbon from './Ribbon';


export default {
  title: 'Components/Ribbon',
  component: Ribbon,
};


const ribbonData = [
      {
          headerText: "Estimating",
          buttons: [
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
      },
      {
          headerText: "Global",
          buttons: [
            {
              iconName: "Settings",
              title: "Settings",
              onClick: action("Clicked Settings")
            }
          ]
} ]


export const Main = () => <Ribbon tabs={ribbonData}/>;
