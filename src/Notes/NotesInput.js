import React from 'react'

const NotesInput=({notes,setNotes,handleSubmit,deleteNotes,notesList})=>{
    return(
        
        <div class="card h-100">
        <div class="card-body p-5">
          <h1 class="fs-4 card-title fw-bold mb-4">Add Something</h1>
          <form onSubmit={handleSubmit} class="needs-validation">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <input
                type="text"
                placeholder="Note ..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                class="form-control"
                required
              />
              <button type="submit" class="btn btn-primary">
                Add
              </button>
            </div>
          </form>

          <div>
            {notesList.map((res) => (
              <ul class="list-group mb-2" key={res.id}>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <h6>{res.name}</h6>
                  <button
                    onClick={() => deleteNotes(res.id)}
                    class="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    )
}
export default NotesInput