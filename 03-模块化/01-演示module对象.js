// module.exports 与 exports 相同
console.log(exports === module.exports)

module.exports = {
    nickname: 'alias',
    sayHi() {
        console.log('Hi module.exports')
    }
}

exports = {
    nickname: 'Alias',
    sayHi() {
        console.log('Hi exports')
    }
}


