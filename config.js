const TOKEN = "8d9f0dfd0563a914c66a55011792b49b62a58a16c115951e7c0ef72b93016e73c8227d6e7bb5140ccc852"; // Токен группы, в которой будет стоять бот
const GROUP_ID = 201174704; // Айди группы, в которой будет стоять бот
const BTN_TEXT = ["не жми брат правда не жми vto.pe", "нажимай брат правда нажми vto.pe", "душа брата нажмёт сюда vto.pe"];
const TIME = 300;
const CHAT_SPAM = ["за донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбас за донбас за донбас за донбас за донбас за донбас за донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбас за донбас за донбас за донбас за донбас за донбас за донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбас за донбас за донбас за донбас за донбас за донбасз а донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбасза донбас за донбас за донбас за донбас за донбас за донбас за донбас"];
const HELLO_TEXT = `Здарова пидорасы и толерастии.
`;

module.exports = {
    TOKEN, CHAT_SPAM, GROUP_ID, BTN_TEXT, HELLO_TEXT, TIME
};
