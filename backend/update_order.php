<?php
include 'db.php';

// Tangani CORS untuk semua jenis request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Origin: http://localhost:5173");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Content-Type: application/json; charset=UTF-8");
    http_response_code(200);
    exit;
}

// Header CORS utama untuk request POST/GET
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// === Tampilkan error untuk debugging ===
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


$conn = new mysqli("localhost", "root", "", "tour_booking");

if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "Koneksi gagal"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"),true);

$id = $data["id"];
$name = $data["name"];
$location = $data["location"];
$checkIn = $data["checkIn"];
$checkOut = $data["checkOut"];
$guest = $data["guest"];
// tambahkan field lainnya jika ada

$query = "UPDATE orders SET 
            name = '$name',
            location = '$location',
            checkIn = '$checkIn',
            checkOut = '$checkOut',
            guest = '$guest'
          WHERE id = $id";

$result = $conn->query($query);

header('Content-Type: application/json');

// Cek apakah ID ada
$check = $conn->query("SELECT id FROM orders WHERE id = '$id'");

if ($check->num_rows == 0) {
    // ID tidak ditemukan
    http_response_code(404);
    echo json_encode([
        "success" => false,
        "message" => "Data tidak ditemukan"
    ]);
    exit;
}

// Jika ID ada, lakukan update
$result = $conn->query($query);

if (!$result) {
    // Query gagal dijalankan
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Gagal update: " . $conn->error
    ]);
    exit;
}

// Cek apakah ada baris yang berubah
if ($conn->affected_rows > 0) {
    // Ada data yang berubah
    http_response_code(200);
    echo json_encode([
        "success" => true,
        "message" => "Data berhasil diupdate"
    ]);
} else {
    // ID ada, tapi data sudah sama
    http_response_code(200);
    echo json_encode([
        "success" => true,
        "message" => "Data sudah sesuai, tidak ada perubahan"
    ]);
}


?>
