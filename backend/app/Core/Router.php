<?php

namespace App\Core;

class Router
{
    public function dispatch(string $uri, string $method): array
    {
        return [
            'uri' => $uri,
            'method' => $method,
            'status' => 'not_implemented',
        ];
    }
}
