interface TasksInterface {
    completed: boolean;
    title: string;
    id: string;
}
interface StateInterface {
    tasks: TasksInterface[];
    user: string|undefined;
    nofActiveTask: number;
}
interface Props{
    state:StateInterface;
    action:any;
}
const ADD_TASK='ADD_TASK';
const REMOVE_TASK='REMOVE_TASK';
const DONE_TASK='DONE_TASK';
const UNDONE_TASK='UNDONE_TASK';
const REODER_TASK='REORDER_TASK';

export const initialState:StateInterface = {
    tasks: [],
    user: undefined,
    nofActiveTask: 0,
}

export const reducer = ({state, action}:Props) => {
    switch(action.type){

    }
}