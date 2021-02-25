const openModal=document.getElementById("openModal");
const closeModal=document.getElementById('closeModal');
const menuModal = document.getElementById('menuModal');

openModal.addEventListener('click', function() {
   menuModal.classList.remove('hidden');
});

closeModal.addEventListener('click', function() {
    menuModal.classList.add('hidden'); 
 });