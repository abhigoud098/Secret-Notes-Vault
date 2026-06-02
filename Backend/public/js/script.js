console.log("js");

const addNotesBtn = document.querySelector(".add-note-btn");
const notesAddForm = document.querySelector(".notes-form");

addNotesBtn.addEventListener("click", () => {
  notesAddForm.classList.add("active");
  notesAddForm.innerHTML = `
<div class="container">

  <form action="http://localhost:8000/note" class="notes-create-form" method="post">

   <button type="button" class="close-btn">✖</button>

    <h2>Create Notes</h2>

    <input 
      type="text" 
      placeholder="Enter Notes Title" 
      class="input-field"
      name ="title"
    />

    <textarea 
      placeholder="Write Your Notes Here..."
      class="textarea-field"
      name = "note"
    ></textarea>

    <button type="submit" class="submit-btn">
      Submit
    </button>

  </form>

</div>`;

  const closeFormBtn = document.querySelector(".close-btn");

  closeFormBtn.addEventListener("click", () => {
    notesAddForm.classList.remove("active");
  });
});

async function deleteNote(id) {
  const response = await fetch(`/note/delete/${id}`, { method: "DELETE" });

  if (response.ok) {
    location.reload();
  }
}
