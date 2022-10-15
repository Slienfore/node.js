const mysql = require('mysql2')

const db = mysql.createPool({
    // 数据库 IP 地址
    host: '127.0.0.1',
    // 账号
    user: 'root',
    // 密码
    password: '3306',
    // 操作的数据库
    database: 'study'
})

// 检测是否连接上数据库
db.query('select 1', (err, res) => {
    if (err) return console.log(err.message)

    console.log(res)
})

// 查询表中所有数据
db.query(
    'select * from student',
    (err, res) => {
        if (err) return console.log(err.message)

        console.log(res)
    }
)


const user = {name: 'alias', sex: '男'}

// 插入数据
db.query(
    'insert into student (name, sex) values (?, ?)',
    [user.name, user.sex],
    (err, res) => {
        if (err) return console.log(err.message)

        if (res.affectedRows === 1) console.log('插入数据成功!')
    }
)

// 插入数据(简化写法)
db.query(
    'insert into student set ?', user,
    (err, res) => {
        if (err) return console.log(err.message)

        if (res.affectedRows === 1) console.log('插入数据成功!')
    }
)

const updateUser = {sId: 8, name: 'alias', sex: '男'}
// 更新数据
db.query(
    'update student set name=?, sex=? where sId = ?',
    [updateUser.name, updateUser.sex, updateUser.sId],
    (err, res) => {
        if (err) return console.log(err.message)

        if (res.affectedRows === 1) console.log('更新成功')
    }
)

// 更新数据(简化写法)
db.query(
    'update student set ? where sId = ?',
    [updateUser, updateUser.sId],
    (err, res) => {
        if (err) return console.log(err.message)

        if (res.affectedRows === 1) console.log('更新数据成功')
    }
)

// 删除数据
db.query(
    'delete from student where sId = ?', 8,// 占位符只有一个 => 直接赋予值
    (err, res) => {
        if (err) return console.log(err.message)

        if (res.affectedRows === 1) console.log('删除数据成功')
    }
)