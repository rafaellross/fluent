import React from 'react'
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react/lib/CommandBar';

export default function ToolBar(props) {
  const { add, edit, refresh, search, columns, print, attachments, processes, filters } = props
  const _items = [
    {
        key: 'addItem',
        text: 'Add',
        iconOnly: true,
        iconProps: { iconName: 'Page' },
        onClick: add.action
    },
    {
        key: 'editItem',
        text: 'Edit',
        iconOnly: true,
        iconProps: { iconName: 'PageHeaderEdit' },
        onClick: edit.action
    },
    {
        key: 'refresh',
        text: 'Refresh',
        iconOnly: true,
        iconProps: { iconName: 'Refresh' },
        split: true,
        onClick: refresh.action
    },
    {
        key: 'search',
        text: '1/56', //provide quantity of records
        iconProps: { iconName: 'SeeDo' },
        onClick: search.action
    },
    {
        key: 'columns',
        text: 'Show/Hide Columns',
        iconOnly: true,
        iconProps: { iconName: 'Waffle' },
        split: true,
        onClick: columns.action
    },
    {
        key: 'print',
        text: 'Print View',
        iconOnly: true,
        iconProps: { iconName: 'Print' },
        split: true,
        onClick: print.action
    },
    {
        key: 'attachments',
        text: 'Attachments',
        iconProps: { iconName: 'Attach' },
        subMenuProps: {
            items: attachments.items,
          },
    },
    {
        key: 'processes',
        text: 'Processes',
        iconProps: { iconName: 'Processing' },
        subMenuProps: {
            items: processes.items,
          },
    },
    {
        key: 'filter',
        text: 'Filter',
        iconProps: { iconName: 'Filter' },
        subMenuProps: {
          items: filters.items,
        },
    },

  ];

    return (
        <CommandBar
        items={_items}
      />

    )
}


