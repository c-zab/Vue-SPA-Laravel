<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class File extends Model
{
		public function user()
		{
			return $this.BelongsTo(User::class);
		}
}
