import React from 'react'
import { Label } from 'office-ui-fabric-react/lib/Label';
import { initializeIcons } from '@uifabric/icons';
import { Icon } from 'office-ui-fabric-react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
initializeIcons();

const ribbonButtonStyles = {
    root: {
        width: '50',
        height: 90,
        textAlign: 'center',
        padding: 5,
        marginTop: 10,
        marginRight: 0,
        marginLeft: 2,
        border: 0

    }
};

const iconClass = mergeStyles({
    fontSize: 40,
    height: 50,
    width: '40',
    margin: '0 25px',
  });

  const labelStyles = {
    root: { marginTop: 0 },
  };



export default function RibbonButton(props){
  return (
    <DefaultButton onClick={props.onClick} styles={ribbonButtonStyles}>
         <div className="ms-Grid" dir="ltr">
             <div className="ms-Grid-row">
                 <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
                     <Icon iconName={props.iconName} className={iconClass}/>
                 </div>
             </div>
             <div className="ms-Grid-row">
                 <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
                 <Label styles={labelStyles}>{props.title}</Label>
                 </div>
             </div>
         </div>
     </DefaultButton>
  )
}
