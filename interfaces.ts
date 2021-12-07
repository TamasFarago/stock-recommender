export interface _data   {
    [index: number]: { 
        name: string; 
        symbol: string; 
        id: number,
        labels: string[],
        posts: number,
        datasets: {
            [index: number]: {
                data: number[]
            }
        }
     };
}

export interface _stock {
    name: string; 
        symbol: string; 
        id: number,
        labels: string[],
        posts: number,
        datasets: {
            [index: number]: {
                data: number[]
            }
        }
}

export interface _pointData {
    dataset: [],
    getColor: () => any,
    index: number,
    value: number,
    x: number,
    y: number
}

export interface _recommend {
    recommendation: string,
    bottomThreshold: number,
    topThreshold: number
}

