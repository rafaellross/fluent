import { IDataServer } from "./Interfaces";

export class SettingsData implements IDataServer {
    public name = "settings";
    public title = "settings";
    public headerText = "settings";
    public iconName = "Settings";
    public toolbar = {
        add: {
            action: () => alert("add")
        },
        edit: {
            action: () => alert("edit")
        },
        refresh: {
            action: () => alert("refresh")
        },
        search: {
            action: () => alert("search")
        },
        columns: {
            action: () => alert("columns")
        },
        print: {
            action: () => alert("print")
        },
        attachments: {
            items: [
            {
                key: "attachment1",
                text: "Attachment 1",
                onClick: () => alert("attachment1")
            },
            {
                key: "attachment2",
                text: "Attachment 2",
                onClick: () => alert("attachment2")
            }
        ]},
        processes: {
            items: [
            {
                key: "processes1",
                text: "Process 1",
                onClick: () => alert("process1")
            },
            {
                key: "process2",
                text: "Process 2",
                onClick: () => alert("process2")
            }
        ]},
        filters: {
            items: [
            {
                key: "filter1",
                text: "Filter 1",
                onClick: () => alert("filter1")
            },
            {
                key: "filter2",
                text: "Filter 2",
                onClick: () => alert("filter2")
            }
        ]},
    }

}