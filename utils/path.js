const path = require('path');

// process.mainModule.filename 是 Node.js 中的一个属性，它返回主模块的文件名。
// 主模块是指应用程序启动时传递给 Node.js 的第一个模块。通常，这个文件是应用程序的入口文件，例如 app.js。
module.exports = path.dirname(process.mainModule.filename);