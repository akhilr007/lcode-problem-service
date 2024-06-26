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

// console logging
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

// mongodb logging
allowedTransports.push(new winston.transports.MongoDB(options));

// file based logging
allowedTransports.push(
  new winston.transports.File({
    level: "error",
    filename: `app.log`,
    format: winston.format.combine(
      winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      winston.format.errors({ stack: true }),
      winston.format.splat(),
      winston.format.printf(
        ({ timestamp, level, message, stack }) =>
          `${timestamp} [${level.toUpperCase()}]: ${message}${
            stack ? `\n${stack}` : ""
          }`
      )
    ),
  })
);

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
