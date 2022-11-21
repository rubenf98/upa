<?php

namespace App\QueryFilters;

use Cerbero\QueryFilters\QueryFilters;

/**
 * Filter records based on query parameters.
 *
 */
class TransactionFilters extends QueryFilters
{
    public function search($string)
    {
        $this->query->where('price', 'like', '%' . $string . '%')
            ->orWhere('created_at', 'like', '%' . $string . '%')
            ->orWhereHas('user', function ($query) use ($string) {
                $query->where('email', 'like', '%' . $string . '%');
            })
            ->orWhereHas('statuses', function ($query) use ($string) {
                $query->where('statuses.name', 'like', '%' . $string . '%');
            });
    }
}
