const filterElement = document.querySelector('#filter');
const people = document.querySelectorAll('.list-wrapper');

filterElement.addEventListener('input', filterContacts);

function filterContacts() {
    if (filterElement.value !== ""){

        for (const person of people) {
            let title = person.querySelector('h3')
            title = title.textContent.toLocaleLowerCase();

            let filterText = filterElement.value.toLocaleLowerCase();

            if(!title.includes(filterText)){
                person.style.display = "none";
            } else {
                person.style.display = "flex";
            }
        }

    } else {
        for (const person of people) {
            person.style.display = "flex";
        }
    }
}