var amqp = require("amqplib/callback_api");

const sender = async () => {
  //amqp://localhost
  const url = "amqp://guest:guest@rabbitmq"
  amqp.connect(url, function(
    error0,
    connection
  ) {
    console.log('url', url);
    if (error0) {
      console.log('ERROR-0!')
      // throw error0;
    }

    connection.createChannel(function(error1, channel) {
      if (error1) {
        console.log('ERROR-1!')
        // throw error1;
      }
      var queue = "test";
      var msg = "John Doe";

      try {
      channel.assertQueue(queue, {
        durable: false
      });

      channel.sendToQueue(queue, Buffer.from(msg));
    } catch(e) {
      console.log('ERROR-2!')
    }
      console.log(" [x] Sent %s", msg);
      return msg;
    });

    setTimeout(function() {
      connection.close();
      process.exit(0);

    }, 500);
  });
};

module.exports = sender;
