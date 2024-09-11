
  const addbutton=document.querySelector('#add');

   const updateLSDdata = ()=>{
      const textarea=document.querySelectorAll('textarea');
      const notes=[];
      textarea.forEach((note)=>{
          return notes.push(note.value);
      })
      localStorage.setItem('notes',JSON.stringify(notes));
  }

  const addNewNote = (text='') => {
      const note=document.createElement('div');
      note.classList.add('note');

      const htmldata = `
      <div class="operation">
      <button class="edit"><i class="fas fa-edit"></i></button>
      <button class="delete"><i class="fas fa-trash-alt"></i></button>
      </div>

       <div class="main ${text?"":"hidden"}"></div>
      <textarea class="${text ? "hidden" : "" } "></textarea>`;

      note.insertAdjacentHTML('afterbegin',htmldata);
      const editbutton=note.querySelector('.edit');
      const deletebutton=note.querySelector('.delete');
      const maindiv=note.querySelector('.main');
      const textarea=note.querySelector('textarea');

      deletebutton.addEventListener('click',() => {
          note.remove();
      });
      textarea.value=text;
      maindiv.innerHTML=text;
      //toggle using edit button
      editbutton.addEventListener('click', () => {
          maindiv.classList.toggle('hidden');
          textarea.classList.toggle('hidden')
      })

      textarea.addEventListener('change',(event) => {
          const value=event.target.value;
          maindiv.innerHTML=value;

          updateLSDdata();
      })

     document.body.appendChild(note);
  }

  const notes=JSON.parse(localStorage.getItem('notes'));

  if(notes){
      notes.forEach((note) => addNewNote(note))
  };

  addbutton.addEventListener('click',() => addNewNote());

