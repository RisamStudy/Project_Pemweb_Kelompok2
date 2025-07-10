<?php
// include 'db.php';
// // Tangani CORS untuk semua jenis request
// if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
//     header("Access-Control-Allow-Origin: http://localhost:5173");
//     header("Access-Control-Allow-Headers: Content-Type, Authorization");
//     header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
//     header("Content-Type: application/json; charset=UTF-8");
//     http_response_code(200);
//     exit;
// }

// // Header CORS utama untuk request POST/GET
// header("Access-Control-Allow-Origin: http://localhost:5173");
// header("Access-Control-Allow-Headers: Content-Type");
// header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
// header("Content-Type: application/json; charset=UTF-8");

// // === Tampilkan error untuk debugging ===
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);

// // === Koneksi ke database ===
// $conn = new mysqli("localhost", "root", "", "tour_booking");

// if (isset($_GET['id'])) {
//     $id = $_GET['id'];
//     $query = "SELECT * FROM orders WHERE id = $id";
//     $result = mysqli_query($conn, $query);
//     $data = mysqli_fetch_assoc($result);
//     echo json_encode($data);
// }
?>
