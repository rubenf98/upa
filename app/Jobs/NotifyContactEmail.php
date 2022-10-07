<?php

namespace App\Jobs;

use App\Mail\NotifyContactEmail as MailNotifyContactEmail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class NotifyContactEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $record;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($aRecord)
    {
        $this->record = $aRecord;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        Mail::to("unidospelaatividade@gmail.com")->queue(new MailNotifyContactEmail($this->record));
    }
}
