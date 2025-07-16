const express = require('express');
const app = express();
app.use(express.json());

let orders = [];

app.get('/api/order', (req, res) => {
  res.json(orders);
});

app.post('/api/order', (req, res) => {
  const order = req.body;
  orders.push(order);
  res.status(201).json({ message: 'Tạo đơn hàng thành công!', order });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server đang chạy ở cổng ${PORT}`);
});
