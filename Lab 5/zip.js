function isMinnesotaZIP(code) {
    // 55001 and 56763
    if (code >= 55001 && code <= 56763) {
        return true
    } else {
        return false
    }
}

// javascript will try to convert values to the correct type
console.log(isMinnesotaZIP('55403'))
console.log(isMinnesotaZIP('55001'))
console.log(isMinnesotaZIP(56763))
console.log(isMinnesotaZIP(55000))
