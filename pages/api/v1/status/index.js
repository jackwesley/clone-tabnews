function status(request, response) {
  response.status(200).json({ message: "Yayyy all good!" });
}

export default status;
