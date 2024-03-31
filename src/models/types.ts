export enum ServerResponseStatus {
    Success = 'success',
    Error = 'error'
}

interface ServerResponse<T> {
    result: ServerResponseStatus;
    data: T[]
}

function getServerResponse<T>(): ServerResponse<T> {
    return {
        result: ServerResponseStatus.Success,
        data: []
    }
}
function getServerResponse2<T>(): ServerResponse<T> {
    return {
        result: ServerResponseStatus.Success,
        data: []
    }
}

getServerResponse2<string>();

type MYOBJ = { id: number, title: string }

function pair<T extends number | MYOBJ, U>(param1: T, param2: U): [T, U] {
    return [param1, param2]
}

const obj: MYOBJ = {
    id: 1,
    title: "HELLo"
}

export let result = pair<MYOBJ, string>({id:2,title:"MILAD"}, 'hello')


