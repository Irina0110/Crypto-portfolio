export type Cryptocurrency = {
    t: number,
    s: string,
    sn: string,
    c: string,
    h: string,
    l: string,
    o: string,
    v: string
}

export type TrendsResponse = {
    ext_code: null,
    ext_info: null,
    result: { [key: string]: Cryptocurrency[] }
}