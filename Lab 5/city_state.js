function city_state(city, state) {
    // you can use template strings to cut down on concatenation
    let cityState = `${city}, ${state.toUpperCase()}`
    return cityState
}

console.log(city_state('Minneapolis', 'mn'))
