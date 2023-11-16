<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;
class User extends Model
{
    use HasFactory;
    protected $table='user';

    public function isCorrectPassword($password)
    {
        return Hash::check($password, $this->password);
    }
}
