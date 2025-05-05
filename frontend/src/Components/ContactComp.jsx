import React from "react";
import contacting from "../assets/contacting.webp";

const notife = () => {
  alert("Pesan berhasil dikirim!");
};
const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const formdata = {
    name: formData.get("name"),
    email: formData.get("email"),
    wa: formData.get("wa"),
    address: formData.get("address"),
    location: formData.get("location"),
    checkIn: formData.get("checkIn"),
    checkOut: formData.get("checkOut"),
    guest: formData.get("guest"),
    message: formData.get("message"),
  };

  try {
    const response = await fetch(
      "http://localhost/Project_Pemweb_Kelompok2/backend/insert_order.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formdata),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);

    if (result.success) {
      notife(); // Jalankan notifikasi hanya jika sukses
    } else {
      alert("Gagal mengirim pesan: " + result.message);
    }
  } catch (error) {
    console.error("Error sending data:", error);
    alert("Terjadi kesalahan saat mengirim pesan");
  }
};

const Contact = () => {
  return (
    <div className="flex flex-col max-w-7xl mx-auto md:flex-row lg:h-screen items-center">
      {/* Image Section */}
      <div className="flex-1 bg-gray-100 flex justify-center items-center">
        <img
          src={contacting}
          alt="Contact Us"
          className="w-full h-full max-w-md md:max-w-full object-cover"
          loading="lazy"
        />
      </div>
      {/* Contact Form Section */}
      <div className="flex-1 bg-white w-full flex flex-col justify-center px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Pesan Tiket Sekarang </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nama
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Masukkan Nama Anda"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Masukkan Email "
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
              required
            />
            <label
              htmlFor="wa"
              className="block text-sm font-medium text-gray-700 mt-5"
            >
              Nomor Whatsapp
            </label>
            <input
              type="tel"
              id="wa"
              name="wa"
              placeholder="Masukkan Nomor WhatsApp "
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
              required
            />
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 mt-5"
            >
              Alamat Rumah Anda
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Masukkan Alamat Rumah Anda"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
              required
            />
          </div>
          <div>
            <div className="grid gap-5 grid-cols-4 flex-grow">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="location"
                  className="flex font-semibold gap-1 items-center"
                >
                  {/* Removed unused Search component */}
                  Lokasi
                </label>
                <select
                  name="location"
                  id="location"
                  className="border border-gray-300 rounded-sm p-1"
                  required
                >
                  <option value="">Pilih Opsi</option>
                  <option value="bali">Bali</option>
                  <option value="india">India</option>
                  <option value="tokyo">Tokyo</option>
                  <option value="venice">Venice</option>
                  <option value="paris">Paris</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="checkIn" className="font-semibold">
                  Mulai Liburan
                </label>
                <input
                  type="date"
                  id="checkIn"
                  name="checkIn"
                  className="border p-1 border-gray-300 rounded-sm"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="checkOut" className="font-semibold">
                  Selesai Liburan
                </label>
                <input
                  type="date"
                  id="checkOut"
                  name="checkOut"
                  className="border p-1 border-gray-300 rounded-sm"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="guest"
                  className="flex font-bold gap-1 items-center"
                >
                  {/* Removed unused Search component */}
                  Tamu
                </label>
                <select
                  name="guest"
                  id="guest"
                  className="border border-gray-300 rounded-sm p-1"
                  required
                >
                  <option value="">Pilih Opsi</option>
                  <option value="2-0">2 Tamu 0 Anak</option>
                  <option value="2-1">2 Tamu 1 Anak</option>
                  <option value="2-2">2 Tamu 2 Anak</option>
                  <option value="2-4">2 Tamu 4 Anak</option>
                  <option value="2-5">2 Tamu 5 Anak</option>
                </select>
              </div>
            </div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mt-5"
            >
              Pesan
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Masukkan Pesan anda"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 hover:cursor-pointer"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
