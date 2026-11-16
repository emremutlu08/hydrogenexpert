<?php
require '/var/www/html/vendor/autoload.php';
$app = require '/var/www/html/bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();
$service = App\Models\Service::where('uuid', getenv('TARGET_SERVICE_UUID'))->firstOrFail();
App\Actions\Service\StartService::run($service);
echo "Coolify deployment queued\n";
