exports.createOrder = async (req, res) => {
  const { orderItems } = req.body;
  //MEGRENDELT TERMÉKEK
  console.log(orderItems);

  if (!orderItems) {
    return res.status(403).json({
      status: "unsuccessfull",
    });
  }

  res.status(200).json({
    status: "order successful",
  });
};
