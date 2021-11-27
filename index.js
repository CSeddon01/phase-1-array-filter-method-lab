function findMatching (driversArray, name) {
    return driversArray.filter(function (driver) {
        return driver.toLowerCase() === name.toLowerCase()
    })
}

function fuzzyMatch(drivers, ab) {
    let fuzzyDriver = drivers.filter(function(driver){
        if (driver.substring(0, 2) === ab )
            return driver
    })
    return fuzzyDriver
}



function matchName (driversArray, name) {
    return driversArray.filter( function (driver) {
        if (driver.name === name) {
            return driver
        }
    })
} 