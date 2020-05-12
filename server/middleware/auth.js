module.exports = options => {
    const assert = require('http-assert')
    const jwt = require('jsonwebtoken')
    const User = require('../models/User')
  
    return async (req, res, next) => {
      const token = String(req.headers.authorization || '').split(' ').pop()
      assert(token, 401, '请先登录')
     const { id } = jwt.verify(token, req.app.get('secret'))
    // (err, decoded) => {
    //     if (err) {
    //         switch (err.name) {
    //           case 'JsonWebTokenError':
    //             res.send({ code: -1, msg: '无效的token' });
    //             break;
    //           case 'TokenExpiredError':
    //             res.send({ code: -1, msg: 'token过期' });
    //             break;
    //         }
    //       }
    //   })
    assert(id, 401, '请先登录')
      req.user = await User.findById(id)
      assert(req.user, 401, '请先登录')
      await next()
    }
  }