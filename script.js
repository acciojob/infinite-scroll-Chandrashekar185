//your code here!
const list = document.getElementById('infi-list');

// Counter to keep track of how many items we've added
let count = 1;

// Add initial 10 items
for (let i = 0; i < 10; i++) {
  const li = document.createElement('li');
  li.textContent = `Item ${count++}`;
  list.appendChild(li);
}

// Add 2 more items when scrolled to bottom of the list container
list.addEventListener('scroll', function () {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight - 5) {
    // Add 2 more list items
    for (let i = 0; i < 2; i++) {
      const li = document.createElement('li');
      li.textContent = `Item ${count++}`;
      list.appendChild(li);
    }
  }
});

