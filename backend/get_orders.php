<?php
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

// === Koneksi ke database ===
$conn = new mysqli("localhost", "root", "", "tour_booking");

if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "Database connection failed"]);
    exit;
}

// === Ambil semua data dari tabel orders ===
$sql = "SELECT id, name, location, checkIn, checkOut, guest from orders;";
$result = $conn->query($sql);

if (!$result) {
    echo json_encode(["success" => false, "message" => "Query failed: " . $conn->error]);
    exit;
}

$data = [];
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

// === Kirim data sebagai JSON ===
echo json_encode($data);

$conn->close();
?>
