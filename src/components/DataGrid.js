import React, { useState, useEffect } from 'react'
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { Announced } from 'office-ui-fabric-react/lib/Announced';
import {
  DetailsList,
  DetailsListLayoutMode,
  Selection,
  SelectionMode,
  IColumn,
} from 'office-ui-fabric-react/lib/DetailsList';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import * as API from '../common/API'


export default function DataGrid() {
    const [items, setItems] = useState([])
    const columns = [
      { key: 'name', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'username', name: 'User', fieldName: 'username', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'website', name: 'Web Site', fieldName: 'website', minWidth: 100, maxWidth: 200, isResizable: true },
    ]

    useEffect(() => {
      // Update the document title using the browser API
      API.getAll("users")
      .then((users) => setItems(users))
    });
    return (
      <DetailsList
      items={items}
      columns={columns}
      />
    )
}
