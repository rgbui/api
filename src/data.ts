

export enum Action {
    get,
    delete,
    put,
    update
}
export class DataCommand {
    action: Action;
}

export class DataQuery {

}

export class DataQueryList {
    table: string;
    where: {};
    page: number;
    count: number;
    project: { name: string, nick: string }[];
    sort: Record<string, 'asc' | "desc">;
}

export class DataPut {
    table: string;
    data: Record<string, any>;
    isReturnKey: boolean;
}
export class DataDelete {
    table: string;
    keys: string[];
}
export class DataUpdate {
    table: string;
    keys: string[];
    data: Record<string, any>
}