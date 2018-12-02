let model = {
    user: "Adam",
    items: [
        {action: "Buy Flowers", done: false},
        {action: "Get Shoes", done: false},
        {action: "Collect Tickets", done: true},
        {action: "Call Joe", done: false},
    ]
}

export class TodoItem {
    action:string;
    done:boolean;
    constructor(action:string, done:boolean){
        this.action = action;
        this.done = done
    }
}

export class Model {
    user: string;
    items: TodoItem[];
    constructor(){
        this.user = "Adam";
        this.items = [
            new TodoItem("Cook a meal",false)
        ]
        this.items = [...this.items, ...model.items]
        console.log(this.items);
    }

}