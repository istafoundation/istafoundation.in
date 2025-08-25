<?php
// contact.php
header("Content-Type: application/json; charset=UTF-8");
// If serving from a different domain than your Next.js app, set appropriate CORS:
// header("Access-Control-Allow-Origin: https://your-domain.example");
// header("Access-Control-Allow-Methods: POST, OPTIONS");
// header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
	http_response_code(204);
	exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
	http_response_code(405);
	echo json_encode(['error' => 'Method not allowed']);
	exit;
}

$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

$name    = isset($data['name']) ? trim($data['name']) : '';
$purpose = isset($data['purpose']) ? trim($data['purpose']) : '';
$phone   = isset($data['phone']) ? trim($data['phone']) : '';
$email   = isset($data['email']) ? trim($data['email']) : '';
$message = isset($data['message']) ? trim($data['message']) : '';

if ($name === '' || $phone === '') {
	http_response_code(400);
	echo json_encode(['error' => 'Name and Phone are required.']);
	exit;
}

// Basic email sanitation
$cleanName = filter_var($name, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$cleanPurpose = $purpose !== '' ? filter_var($purpose, FILTER_SANITIZE_FULL_SPECIAL_CHARS) : 'N/A';
$cleanPhone = filter_var($phone, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$cleanEmail = $email !== '' ? filter_var($email, FILTER_VALIDATE_EMAIL) : false;
$cleanMessage = $message !== '' ? filter_var($message, FILTER_SANITIZE_FULL_SPECIAL_CHARS) : 'N/A';

$to = "istafoundation.in@gmail.com";
$subject = "New Contact Form Submission";

// Avoid header injection
$fromEmail = $cleanEmail ? $cleanEmail : "no-reply@" . ($_SERVER['SERVER_NAME'] ?? "example.com");
$headers  = "From: {$fromEmail}\r\n";
$headers .= "Reply-To: {$fromEmail}\r\n";

$body = "You have a new contact form submission:\n\n";
$body .= "Name: {$cleanName}\n";
$body .= "Purpose: {$cleanPurpose}\n";
$body .= "Phone: {$cleanPhone}\n";
$body .= "Email: " . ($cleanEmail ? $cleanEmail : 'N/A') . "\n\n";
$body .= "Message:\n{$cleanMessage}\n";

$sent = mail($to, $subject, wordwrap($body, 70), $headers);

if ($sent) {
	echo json_encode(['success' => true]);
} else {
	http_response_code(500);
	echo json_encode(['error' => 'Failed to send email.']);
}
