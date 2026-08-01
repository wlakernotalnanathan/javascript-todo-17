const list = ['Code', 'Test', 'Ship'];
const ul = document.getElementById('tasks');
if(ul) { list.forEach(t => {
    let li = document.createElement('li');