<?php

$random = rand(1, 10);

$response = [];
$response['value'] = $random;

echo json_encode($response);
