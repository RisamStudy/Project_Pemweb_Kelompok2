import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import TopBanner from '../Components/TopBanner';

const ListAllTrip = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost/Project_Pemweb_Kelompok2/backend/get_orders.php')
      .then(res => res.json())
      .then(data => {
        console.log("Data dari backend:", data);
        setOrders(data);
      })
      .catch(err => console.error('Fetch error:', err));
  }, []);

  // Proses data untuk Pie Chart
  const locationCount = orders.reduce((acc, curr) => {
    acc[curr.location] = (acc[curr.location] || 0) + 1;
    return acc;
  }, {});

  const pieData = Object.entries(locationCount).map(([location, count]) => ({
    name: location,
    value: count
  }));

  const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF5722'];

  return (
    <>
      <TopBanner text="Daftar Order " />
      {/* Tabel Daftar Order */}
      <section className="p-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-3 font-serif">Daftar Order</h2>
        <hr className="text-red-500 w-[200px] bg-red-500 mx-auto h-1 mb-10" />
        <table className="w-full border text-sm text-center">
          <thead>
            <tr>
              <th className="border p-2">Nomor</th>
              <th className="border p-2">Nama</th>
              <th className="border p-2">Lokasi</th>
              <th className="border p-2">Mulai Liburan</th>
              <th className="border p-2">Selesai Liburan</th>
              <th className="border p-2">Tamu</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="border p-2">{order.id}</td>
                <td className="border p-2">{order.name}</td>
                <td className="border p-2">{order.location}</td>
                <td className="border p-2">{order.checkIn}</td>
                <td className="border p-2">{order.checkOut}</td>
                <td className="border p-2">{order.guest}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Pie Chart */}
      <section className="p-4 mt-10">
        <h2 className="text-2xl font-bold text-center mb-4 font-serif">Statistik Lokasi Pemesanan</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={130}
              fill="#8884d8"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </section>
    </>
  );
};

export default ListAllTrip;
