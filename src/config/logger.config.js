const winston = require("winston");
const { LOG_LEVEL } = require("./server.config");

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

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.printf(
      (log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`
    )
  ),
  transports: allowedTransports,
});

module.exports = logger;
