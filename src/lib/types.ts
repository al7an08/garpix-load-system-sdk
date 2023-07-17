type CargoData = {
    title: string
    length: number
    width: number
    height: number
    mass: number
    stacking?: boolean
    stacking_limit?: number
    turnover?: boolean
    article?: string
    margin_length?: number
    margin_width?: number
    count?: number
    color?: string
    demo?: boolean
    last_changed_user?: number
    info?: {
        additionalProp1: string,
        additionalProp2: string,
        additionalProp3: string,
    }
}

type Group = {
    title: string
    pallet: number
    cargoes: CargoData[]
    sort: number
}


type InputData = {
    cargo_spaces: number[]
    groups: Group[]
    userSort: boolean
}

export { CargoData };
export { InputData };
export { Group }