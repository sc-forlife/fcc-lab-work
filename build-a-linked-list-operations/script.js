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
  if (!list.head) {
    return false;
  }

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
function insertAt(list, index, element) {
  if (index < 0 || index > list.length) {
    return undefined;
  }

  let previous = null;
  let current = list.head;

  console.log(current);

  if (current === null) {
    list.head = { element: element, next: null };
    list.length++;

    return JSON.stringify(list, null, 2);
  }

  for (let i = 0; i !== index; i++) {
    previous = current;
    current = current.next;
  }

  if (current === null) {
    previous.next = { element: element, next: null };
  }

  if (previous === null) {
    list.head = { element: element, next: list.head };
  } else {
    previous.next = { element: element, next: current };
  }

  list.length++;

  return JSON.stringify(myList, null, 2);
}

//You should have a removeAt function that accepts a linked list and an index. It should remove the node at the given index in the linked list. If the index is out of bounds, it should not modify the list.
function removeAt(list, index) {
  if (index < 0 || index > list.length - 1) {
    return undefined;
  }

  let previous = null;
  let current = list.head;

  for (let i = 0; i !== index; i++) {
    previous = current;
    current = current.next;
  }

  if (previous === null && index === 0) {
    list.head = current.next;
  } else {
    previous.next = current.next;
  }

  list.length--;

  return JSON.stringify(myList, null, 2);
}

//You should have a clear function that accepts a linked list. It should remove all elements from the linked list, effectively resetting it to an empty state.
function clear(list) {
  list.head = null;
  list.length = 0;
  return JSON.stringify(myList, null, 2);
}

const myList = initList();
const newList = initList();
add(myList, 40);
add(myList, 41);
add(myList, 42);
add(myList, 43);
console.log(JSON.stringify(myList, null, 2));

// console.log(contains(newList, 39));
// console.log(getAt(myList, 3));
console.log(insertAt(newList, 0, 30));
// console.log(removeAt(myList, 1));
// console.log(clear(myList));
