import React, { useState } from 'react';
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [project, setProject] = useState('');

  const [newname, setNewName] = useState('');
  const [newlastname, setNewLastname] = useState('');
  const [newemail, setNewEmail] = useState('');
  const [newmobile, setNewMobile] = useState('');
  const [newproject, setNewProject] = useState('');

  const [clients, setClients] = useState([]);

  const [editedClientIndex, setEditedClientIndex] = useState(-1);

  function handleSubmit(event) {
    event.preventDefault();

    const stdname = name;
    const stdlastname = lastname;
    const stdemail = email;
    const stdmobile = mobile;
    const stdproject = project;

    setClients([
      ...clients,
      { name: stdname, lastname: stdlastname, email: stdemail, mobile: stdmobile, project: stdproject },
    ]);

    setName('');
    setLastname('');
    setEmail('');
    setMobile('');
    setProject('');
  }

  function handleEdit(index) {
    const clientToEdit = clients[index];
    setNewName(clientToEdit.name);
    setNewLastname(clientToEdit.lastname);
    setNewEmail(clientToEdit.email);
    setNewMobile(clientToEdit.mobile);
    setNewProject(clientToEdit.project);

    setEditedClientIndex(index);

    // const updatedClients = [...clients];
    // updatedClients.splice(index, 1);
    // setClients([...updatedClients]);
  }

  function handleSaveEdit() {
    if (editedClientIndex !== -1) {
      const updatedClients = [...clients];
      updatedClients[editedClientIndex] = {
        name: newname,
        lastname: newlastname,
        email: newemail,
        mobile: newmobile,
        project: newproject,
      };
      setClients(updatedClients);

      setNewName('');
      setNewLastname('');
      setNewEmail('');
      setNewMobile('');
      setNewProject('');
      setEditedClientIndex(-1);
    }
  }

  function handleDelete(index) {
    const updatedClients = [...clients];
    updatedClients.splice(index, 1);
    setClients(updatedClients);
  }

  return (
    <div>
      <div className="heading">
        <div>Clients Panel</div>
        <div>Clients</div>
      </div>
      <div className="home">
        <div className="home-left">
          <div className="Clients-head">Clients</div>
          <table>
            <thead>
              <tr className="thdetails">
                <th>Name</th>
                <th>
                  <div>Last</div>
                  <div>Name</div>
                </th>
                <th>Email</th>
                <th>Mobile No.</th>
                <th>Project</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => (
                <tr key={index}>
                  <td>{client.name}</td>
                  <td>{client.lastname}</td>
                  <td>{client.email}</td>
                  <td>{client.mobile}</td>
                  <td>{client.project}</td>
                  <td className='edit-delete'>
                    <span className='edit' onClick={() => handleEdit(index)}>Edit</span>|
                    <span className='delete' onClick={() => handleDelete(index)}>Delete</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="home-right">
          <div className="create-clients">Create Clients</div>
          <div>
            <form action="" onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <br />
              <input type="text" onChange={(e) => setName(e.target.value)} name="name" value={name} />
              <br />
              <br />
              <label htmlFor="lastname">Last Name</label>
              <br />
              <input type="text" onChange={(e) => setLastname(e.target.value)} name="lastname" value={lastname} />
              <br />
              <br />
              <label htmlFor="email">Email</label>
              <br />
              <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" value={email} />
              <br />
              <br />
              <label htmlFor="mobile">Mobile No.</label>
              <br />
              <input type="text" onChange={(e) => setMobile(e.target.value)} name="mobile" value={mobile} />
              <br />
              <br />
              <label htmlFor="project">Project</label>
              <br />
              <input type="text" onChange={(e) => setProject(e.target.value)} name="project" value={project} />
              <br />
              <br />
              <input type="submit" value="Create Clients" className="create-clients-button" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
