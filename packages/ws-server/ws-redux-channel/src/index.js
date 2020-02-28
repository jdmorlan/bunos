const { eventChannel } = require("redux-saga");
const createWsClient = require("@bunos/ws-api-client");

function createSocketChannel(socket) {
  return eventChannel(emit => {
    const messageHandler = message => {
      emit(message.data);
    };

    socket.on("message", messageHandler);

    const unsubscribe = () => {
      socket.off("ping");
    };

    return unsubscribe;
  });
}

module.exports = opts =>
  function*() {
    const wsClient = buildWsClient(opts);
    const socket = yield call(wsClient.connect);
    const socketChannel = yield call(createSocketChannel, socket);

    while (true) {
      try {
        const payload = yield take(socketChannel);
        yield put({ type: "INCOMING_WS_MESSAGE", payload });
      } catch (error) {
        console.error("socket:error", error);
      }
    }
  };

module.exports = function* watchChannel() {
  const socket = yield call(createWebSocketConnection);
};
