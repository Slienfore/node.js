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

/**
 * 进行转义 html 标签字符串
 * @param str 字符串
 * @returns {*} 处理结果
 */
const htmlEscape = str => {
    return str.replace(/<|>|"|&/g, el => {
        switch (el) {
            case '<':
                return '&lt;'
            case '>':
                return '&gt;'
            case '"':
                return '&quot;'
            case '&':
                return '&amp;'
        }
    })
}

/**
 * 将转义的 html 字符串解析成 html
 * @param str 字符串
 * @returns {*} 处理结果
 */
const htmlUnEscape = str => {
    return str.replace(/&lt;|&gt;|&quot;&amp;/g, el => {
        switch (el) {
            case '&lt;':
                return '<'
            case '&gt;':
                return '>'
            case '&quot;':
                return '"'
            case '&amp;':
                return '&'
        }
    })
}

module.exports = {
    format,
    htmlEscape
}
