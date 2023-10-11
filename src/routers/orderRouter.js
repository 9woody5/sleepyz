const { Router } = require('express');
const { makeOrder, getUserOrders } = require('../controllers/orderController');
const { getUserInfo } = require('../controllers/userController');
const validateToken = require('../middlewares/validateTokenHandler');

const router = Router();

router.post('/', makeOrder); // 주문 작성
router.get('/history', getUserOrders); // 주문 조회
router.get('/', validateToken, getUserInfo); // 주문 작성시 유저 정보 불러오기

module.exports = router;
