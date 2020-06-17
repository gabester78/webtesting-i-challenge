module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function repair(item) {
  return { ...item, durability: 100 };
}

function succeed(item) {
  if (item.enhancement < 20) {
    return { ...item, enhancement: item.enhancement + 1 };
  }
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
