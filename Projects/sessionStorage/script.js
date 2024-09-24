const addContactName = document.getElementById("addContact");
const addContactNumber = document.getElementById("addContactNumber");
const insertContactBtn = document.getElementById("insertContact");

const getContact = document.getElementById("getContact");
const fetchConactBtn = document.getElementById("fetchConact");

const deleteContact = document.getElementById("deleteContact");
const removeContactBtn = document.getElementById("removeContact");

const showContact = document.querySelector(".showContact");

insertContactBtn.addEventListener("click", () => {
  let addConctactText = addContactName.value;
  let addConctactText2 = addContactNumber.value;
  console.log(addConctactText);

  if (addConctactText !== "") {
    if (addConctactText2 !== "") {
      sessionStorage.setItem(addConctactText, addConctactText2);
    }
  } else {
    alert("Plese enter Name");
  }
});

fetchConactBtn.addEventListener("click", () => {
  let getContactName = getContact.value;
  if (getContactName !== "") {
    let contact = sessionStorage.getItem(getContactName);

    if (contact !== "") {
      showContact.innerHTML += `<p>${getContactName}: ${contact}</p>`;
    } else {
      alert("No contact found");
    }
  }
});

removeContactBtn.addEventListener("click", () => {
  let deleteContactText = deleteContact.value;
  if (deleteContactText !== "") {
    sessionStorage.removeItem(deleteContactText);
    alert("Contact Deleted");
  }
});
