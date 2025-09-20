function success(data, message = "Success") {
  return {
    success: true,
    message,
    data
  };
}

function error(err, code = 500) {
  return {
    success: false,
    code,
    error: err.message || err
  };
}

module.exports = { success, error };
