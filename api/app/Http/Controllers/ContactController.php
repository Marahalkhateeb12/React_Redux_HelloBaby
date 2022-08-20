<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{

   public  function ContactAPI()
    {
        $contact = Contact::all();
        return $contact;
    }


       public function addContact(Request $request)
    {
        
        $contact = new Contact();
        
        $contact->name = $request->name;
        $contact->email = $request->email;
        $contact->message = $request->message;
        $contact->save();


    }
}
