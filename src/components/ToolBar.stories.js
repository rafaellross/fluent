import React from 'react';
import { action } from '@storybook/addon-actions';
import ToolBar from './ToolBar';


export default {
  title: 'Components/ToolBar',
  component: ToolBar,
};

export const buttonsData = {
    new: {
      action: action('New'),
      disabled: false
    },
    edit: {
      action: action('Edit')
    },
    refresh: {
      action: action('Refresh')
    },
    search: {
      action: action('Search')
    },
    columns: {
      action: action('Columns')
    },
    print: {
      action: action('Print')
    },
    attachments: {
      items: [
        {
        key: 'attachment',
        text: "Attachment1",
        onClick: action('Attachmnent1')
      },
      {
        key: 'attachment',
        text: "Attachment2",
        onClick: action('Attachmnent2')
      }]
    },
    processes: {
      items: [
        {
        key: 'proccess1',
        text: "Process1",
        onClick: action('Process1')
      },
      {
        key: 'proccess2',
        text: "Process2",
        onClick: action('Process2')
      }]
    },
    processes: {
      items: [
        {
        key: 'proccess1',
        text: "Process1",
        onClick: action('Process1')
      },
      {
        key: 'proccess2',
        text: "Process2",
        onClick: action('Process2')
      }
      ]
    },
    filters: {
      items: [
        {
        key: 'filter1',
        text: "Filter1",
        onClick: action('Filter1')
      },
      {
        key: 'filter2',
        text: "Filter2",
        onClick: action('Filter2')
      }
      ]
    }

};


export const Main = () => <ToolBar {...buttonsData}/>;
