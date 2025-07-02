import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const EditOrder = () => {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost/PROJECT_PEMWEB_KELOMPOK2/backend/get_order_by_id.php?id=${id}`)
      .then(res => res.json())
      .then(data => setOrder(data));
  }, [id]);

  const handleUpdate = () => {
    fetch('http://localhost/PROJECT_PEMWEB_KELOMPOK2/backend/update_order.php', {
      method: 'POST',
      body: JSON.stringify(order),
      headers: { 'Content-Type': 'application/json' }
    }).then(() => {
      alert('Data berhasil diperbarui');
      navigate('/');
    });
  };

  return (
    <div>
      <h2 className='mt-10 px-3 py-10 text-3xl font-bold tracking-tighter sm:text-5xl text-center font-serif'>Edit Order</h2>
              <hr className="text-red-500 w-[200px] bg-red-500 mx-auto h-1 mb-10" />
      <table className='w-full border text-sm text-center'>
                  <thead>
            <tr>
              <th className="border p-2">Nomor</th>
              <th className="border p-2">Nama</th>
              <th className="border p-2">Lokasi</th>
              <th className="border p-2">Mulai Liburan</th>
              <th className="border p-2">Selesai Liburan</th>
              <th className="border p-2">Tamu</th>
              <th className="border p-2">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td className="border p-2">{order.id}</td>
                <td className="border p-2"><input
  type="text"
  value={order.name || ""}
  onChange={(e) => setOrder({ ...order, name: e.target.value })}
/></td>
                <td className="border p-2"><input
  type="text"
  value={order.location || ""}
  onChange={(e) => setOrder({ ...order, location: e.target.value })}
/></td>
                <td className="border p-2"><input
  type="date"
  value={order.checkIn || ""}
  onChange={(e) => setOrder({ ...order, checkIn: e.target.value })}
/></td>
                <td className="border p-2"><input
  type="date"
  value={order.checkOut || ""}
  onChange={(e) => setOrder({ ...order, checkOut: e.target.value })}
/></td>
                <td className="border p-2"><input
  type="text"
  value={order.guest || ""}
  onChange={(e) => setOrder({ ...order, guest: e.target.value })}
/></td>
                <td className="border p-2">      <button onClick={handleUpdate}>Update</button></td>



            </tr>
          </tbody>
      </table>

    </div>
  );
};

export default EditOrder;
