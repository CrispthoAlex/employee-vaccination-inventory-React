import React, {useState} from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';


// DB initial
const initialDb = [
    {
        id: 1,
        idcitizen: 123456789,
        name: "Lucy",
        lastname: "Fihum",
        email: "lucy.fihum@gmail.com",
        birthday: null,
        address: null,
        phone: null,
        vaccinated: false,
        vaccinename: null,
        vaccinedate: null,
        vaccinedose: 0,
    },
    {
        id: 2,
        idcitizen: 234567890,
        name: "Peter",
        lastname: "Parker",
        email: "man.spider@gmail.com",
        birthday: null,
        address: null,
        phone: null,
        vaccinated: false,
        vaccinename: null,
        vaccinedate: null,
        vaccinedose: 0,
    },
    {
        id: 3,
        idcitizen: 345678901,
        name: "Josh",
        lastname: "Brolin",
        email: "angry.hulk@gmail.com",
        birthday: null,
        address: null,
        phone: null,
        vaccinated: false,
        vaccinename: null,
        vaccinedate: null,
        vaccinedose: 0,
    }
]

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);

  return (
    <div>
        <h2>MANAGE USERS</h2>
        <CrudForm />
        <CrudTable data={db}/>
    </div>
  );
}

export default CrudApp
