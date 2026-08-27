function initQueue() {
  return {
    collection: [],
  };
}

function print(queue) {
  console.log(queue.collection);
}

function enqueue(queue, element) {
  queue.collection.unshift(element);
  return queue;
}

function dequeue(queue) {
  const dequeue = queue.collection.pop();
  return dequeue;
}

function front(queue) {
  return queue.collection[queue.collection.length - 1];
}

function size(queue) {
  return queue.collection.length;
}

function isEmpty(queue) {
  return !queue.collection.length ? true : false;
}

const myQueue = initQueue();

console.log(enqueue(myQueue, 40));
console.log(enqueue(myQueue, 41));
console.log(enqueue(myQueue, 42));
console.log(dequeue(myQueue));
console.log(front(myQueue));
// console.log(size(myQueue));
// console.log(isEmpty(myQueue));
print(myQueue);
