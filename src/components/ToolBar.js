import React from 'react'
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react/lib/CommandBar';
import { IButtonProps } from 'office-ui-fabric-react/lib/Button';




export default function ToolBar() {
    return (
        <CommandBar
        items={_items}

      />

    )
}


const _items = [
    {
        key: 'newItem',
        text: 'New',
        iconOnly: true,
        iconProps: { iconName: 'Page' },
    },
    {
        key: 'editItem',
        text: 'Edit',
        iconOnly: true,
        iconProps: { iconName: 'PageHeaderEdit' },
    },
    {
        key: 'refresh',
        text: 'Refresh',
        iconOnly: true,
        iconProps: { iconName: 'Refresh' },
        split: true,
    },
    {
        key: 'search',
        text: '1/56', //provide quantity of records
        iconProps: { iconName: 'SeeDo' },
    },
    {
        key: 'columns',
        text: 'Show/Hide Columns',
        iconOnly: true,
        iconProps: { iconName: 'Waffle' },
        split: true
    },
    {
        key: 'print',
        text: 'Print View',
        iconOnly: true,
        iconProps: { iconName: 'Print' },
        split: true
    },
    {
        key: 'attachments',
        text: 'Attachments',
        iconProps: { iconName: 'Attach' },
        subMenuProps: {
            items: [
              {
                key: 'attach1',
                text: 'Attachment 1',
              },
              {
                key: 'attach2',
                text: 'Attachment 2',
              },

            ],
          },
    },
    {
        key: 'processes',
        text: 'Processes',
        iconProps: { iconName: 'Processing' },
        subMenuProps: {
            items: [
              {
                key: 'process1',
                text: 'Process 1',
              },
              {
                key: 'process2',
                text: 'Process 2',
              },

            ],
          },

    },
    {
        key: 'filter',
        text: 'Filter',
        iconProps: { iconName: 'Filter' },
        subMenuProps: {
            items: [
              {
                key: 'filter1',
                text: 'Filter 1',
              },
              {
                key: 'filter2',
                text: 'Filter 2',
              },

            ],
          },

    },

  ];
