export interface IDataServer {
    name: string;
    title: string;
    iconName: string;
    headerText: string;
    toolbar: IToolBar;
}

export interface IAction {
    action: () => void
}

export interface IToolBar {
    add: IAction;
    edit: IAction;
    refresh: IAction;
    search: IAction;
    columns: IAction;
    print: IAction;
    attachments: Item;
    processes: Item;
    filters: Item;
}

export interface Item {
    items: ISubItem[]
}

export interface ISubItem {
    key: string;
    text: string;
    onClick: () => any
}
