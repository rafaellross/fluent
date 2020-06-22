import React from 'react';
import { action } from '@storybook/addon-actions';
import DataGrid from './DataGrid';


export default {
  title: 'Components/DataGrid',
  component: DataGrid,
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

export const Main = () => <DataGrid/>;
