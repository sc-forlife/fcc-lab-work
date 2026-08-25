function initList() {
  return {
    head: null,
    length: 0,
  };
}

function isEmpty(list) {
  return list.length === 0;
}

function add(list, element) {
  const node = { element, next: null };

  if (isEmpty(list)) {
    list.head = node;
  } else {
    let current = list.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  list.length++;
}

function remove(list, element) {
  let previous = null;
  let current = list.head;

  while (current !== null && current.element !== element) {
    previous = current;
    current = current.next;
  }

  if (current === null) return;

  if (previous !== null) {
    previous.next = current.next;
  } else {
    list.head = current.next;
  }

  list.length--;
}

//You should have a contains function that accepts a linked list and an element. It should return true if the specified element exists in the linked list, and false otherwise.
function contains(list, element) {
  let current = list.head;

  do {
    if (current.element === element) {
      return true;
    } else {
      current = current.next;
    }
  } while (current.next !== null);

  return false;
}

//You should have a getAt function that accepts a linked list and an index. It should return the element at the given index in the linked list. If the index is out of bounds, it should return undefined.
function getAt(list, index) {
  if (index < 0 || index > list.length - 1) {
    return undefined;
  }
  let current = list.head;

  for (let i = 0; i !== index; i++) {
    current = current.next;
  }

  return current.element;
}

//You should have a insertAt function that accepts a linked list, an index, and an element. It should insert the given element at the specified position in the linked list. If the index is out of bounds, it should not modify the list.
function insertAt(list, index, element) {}

function removeAt(list, index) {}

function clear(list) {}

const myList = initList();
add(myList, 40);
add(myList, 41);
add(myList, 42);
add(myList, 43);
console.log(JSON.stringify(myList, null, 2));

// console.log(contains(myList, 39));
// console.log(getAt(myList, 3));
