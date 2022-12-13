
export const updObjInArr = (items, id, propName, newProps) => {
    return items.map(u => {
        if (u[propName] === id) {
            return {...u, ...newProps}
        }
        return u;
    })
}