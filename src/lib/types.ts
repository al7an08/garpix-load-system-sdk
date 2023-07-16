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
    color?: string
    demo?: boolean
    last_changed_user?: number
}


export { CargoData };