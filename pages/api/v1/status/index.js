function status(request, response) {
  response.status(200).json({ chave: "são acima da baixa" });
}

export default status;
