/**
 * 补充前导零
 * @param num 数值
 * @returns {*|string} 处理结果
 */
const preZero = num => num > 9 ? num : '0' + num

/**
 * 格式化时间
 * @param str 待处理时间
 * @returns {`${number}-${*}-${*}  ${*}:${*}:${*}`|`${number}-${*}-${*}  ${*}:${*}:${string}`|`${number}-${*}-${*}  ${*}:${string}:${*}`|`${number}-${*}-${*}  ${*}:${string}:${string}`|`${number}-${*}-${*}  ${string}:${*}:${*}`|`${number}-${*}-${*}  ${string}:${*}:${string}`|`${number}-${*}-${*}  ${string}:${string}:${*}`|`${number}-${*}-${*}  ${string}:${string}:${string}`|`${number}-${*}-${string}  ${*}:${*}:${*}`|`${number}-${*}-${string}  ${*}:${*}:${string}`|`${number}-${*}-${string}  ${*}:${string}:${*}`|`${number}-${*}-${string}  ${*}:${string}:${string}`|`${number}-${*}-${string}  ${string}:${*}:${*}`|`${number}-${*}-${string}  ${string}:${*}:${string}`|`${number}-${*}-${string}  ${string}:${string}:${*}`|`${number}-${*}-${string}  ${string}:${string}:${string}`|`${number}-${string}-${*}  ${*}:${*}:${*}`|`${number}-${string}-${*}  ${*}:${*}:${string}`|`${number}-${string}-${*}  ${*}:${string}:${*}`|`${number}-${string}-${*}  ${*}:${string}:${string}`|`${number}-${string}-${*}  ${string}:${*}:${*}`|`${number}-${string}-${*}  ${string}:${*}:${string}`|`${number}-${string}-${*}  ${string}:${string}:${*}`|`${number}-${string}-${*}  ${string}:${string}:${string}`|`${number}-${string}-${string}  ${*}:${*}:${*}`|`${number}-${string}-${string}  ${*}:${*}:${string}`|`${number}-${string}-${string}  ${*}:${string}:${*}`|`${number}-${string}-${string}  ${*}:${string}:${string}`|`${number}-${string}-${string}  ${string}:${*}:${*}`|`${number}-${string}-${string}  ${string}:${*}:${string}`|`${number}-${string}-${string}  ${string}:${string}:${*}`|`${number}-${string}-${string}  ${string}:${string}:${string}`}
 */
const format = str => {

    const date = new Date(str)

    const year = date.getFullYear(), month = preZero(date.getMonth() + 1), day = preZero(date.getDate()),
        hh = preZero(date.getHours()), mm = preZero(date.getMinutes()), ss = preZero(date.getSeconds())

    return `${year}-${month}-${day}  ${hh}:${mm}:${ss}`
}

module.exports = {
    format
}