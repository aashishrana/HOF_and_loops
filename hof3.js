const higherOrder = (n) => {
    const oneFun = (m) => {
        const threeFun = (o) => {
            return n + m + o;
        }
        return threeFun;
    }
    return oneFun;
}


console.log(higherOrder(2)(3)(4));