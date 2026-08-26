function initStack() {
  return { collection: [] };
}

function push(stack, element) {
  return stack.collection.push(element);
}

function pop(stack) {
  return stack.collection.pop();
}

function peek(stack) {
  return stack.collection[stack.collection.length - 1];
}

function isEmpty(stack) {
  const check = stack.collection.length;
  const isEmptyCheck = !check ? true : false;
  if (!peek(stack) && check) {
    return false;
  }
  return isEmptyCheck;
}

function clear(stack) {
  stack.collection = [];
  return stack;
}
