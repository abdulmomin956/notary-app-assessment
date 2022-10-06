import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    const loadData = async () => {
      const res = await axios.post('http://demo2211087.mockable.io/mock')
      if (res.status === 200) {
        setData(res?.data)
      }
    }
    loadData();
  }, [])
  // console.log(data);
  return (
    <main>
      <h1>Notary App Assessment</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            data?.companies?.map((item, i) => <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.status}</td>
            </tr>)
          }
        </tbody>
      </Table>
    </main>
  );
}

export default App;
