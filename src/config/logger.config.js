const winston = require("winston");
require("winston-mongodb");

const { LOG_LEVEL, LOG_DB_URL } = require("./server.config");

let options = {
  db: LOG_DB_URL,
  options: { useUnifiedTopology: true },
  collection: "logs",
  level: "error",
  metaKey: "additionalInfo",
};

const allowedTransports = [];

allowedTransports.push(
  new winston.transports.Console({
    level: LOG_LEVEL,
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.splat(),
      winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      winston.format.printf(
        (log) => `${log.timestamp} [${log.level}]: ${log.message}`
      )
    ),
  })
);

allowedTransports.push(new winston.transports.MongoDB(options));

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.printf(
      (log) => `${log.timestamp} [${log.level}]: ${log.message}`
    )
  ),
  transports: allowedTransports,
});

module.exports = logger;
