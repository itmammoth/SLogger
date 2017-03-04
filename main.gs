/**
 * Creates a SLogger instance bound with the given sheet.
 *
 * @param {Sheet} sheet the sheet that the logger outputs into
 * @return {SLogger} the instance of SLogger
 */
function create(sheet) {
  return {
    debug: function(message) {
      out_(sheet, 'debug', message);
    },
    info: function(message) {
      out_(sheet, 'info', message);
    },
    warn: function(message) {
      out_(sheet, 'warn', message);
    },
    error: function(message) {
      out_(sheet, 'error', message);
    },
  };
};

function out_(sheet, label, message) {
  sheet.appendRow([new Date(), label, message]);
}