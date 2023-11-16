<?php

namespace App\Http\Controllers\Api;
use App\Models\Contact;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ContactController extends Controller
{
     /*lay danh sach*/
     public function index(){
        $agr = [
            ['status','!=',0],
            // ['replay_id','=',0]
        ];
        $contacts = Contact::where($agr)->orderBy('created_at','desc')->get();
        $count_contact = count($contacts);
        $count_trash = Contact::where('status','=',0)->count();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'contacts'=>$contacts,'count_contact'=>$count_contact,'count_trash'=>$count_trash],200);
    }
    public function show($id)
    {

        $Contact = Contact::find($id);

        return response()->json(

            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'contacts' => $Contact],

            200

        );
    }
    //Contact- them store
    public function store(Request $request)
    {
        $Contact = new Contact();
        $Contact->user_id = $request->user_id; 
        $Contact->name = $request->name; 
        $Contact->email = $request->email; 
        $Contact->phone = $request->phone; 
        $Contact->title = $request->title; 
        $Contact->content = $request->content; 
        $Contact->replay_id = $request->replay_id; 
        $Contact->created_at = date('Y-m-d H:i:s');
        $Contact->created_by = 1;
        $Contact->updated_by = 1;
        $Contact->status = $request->status; //form
        $Contact->save(); //lưu vào Csdl
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'contacts' => $Contact],
            201
        );
    }
    //Contact-update
    public function update(Request $request, $id)
    {

        $Contact = Contact::find($id);
        $Contact->user_id = $request->user_id; 
        $Contact->name = $request->name; 
        $Contact->email = $request->email; 
        $Contact->phone = $request->phone; 
        $Contact->title = $request->title; 
        $Contact->content = $request->content; 
        $Contact->replay_id = $request->replay_id; 
        $Contact->created_at = date('Y-m-d H:i:s');
        $Contact->created_by = 1;
        $Contact->updated_by = 1;
        $Contact->status = $request->status; //form
        $Contact->save(); //lưu vào Csdl
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'contacts' => $Contact],
            201
        );

        return response()->json(

            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'contacts' => $Contact],

            200

        );
    }
    //xoa
    public function destroy($id)
    {
        $Contact = Contact::find($id);
        if ($Contact == null) {
            return response()->json(
                ['message' => 'Tai du lieu khong thanh cong', 'success' => false, 'contacts' => null],
                404
            );
        }
        $Contact->delete();
        return response()->json(['message' => 'Thanh cong', 'success' => true, 'contacts' => $Contact], 200);

    }
    public function trash()
    {
        $trash = Contact::where('status','=',0)->orderBy('updated_by', 'desc')->get();
        $count_trash = Contact::where('status','=',0)->count();
        return response()->json(['success' => true,'message' =>'tai thanh cong','trash'=>$trash,'count_trash'=>$count_trash]);
    }
    public function status(string $id)
    {
        $contact =Contact::find($id);
        if($contact==null)
        {
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'contacts' => null],404
            );
        }
        $contact->status=($contact->status==1)? 2:1;
        $contact->updated_at=date('Y-m-d H:i:s');
        $contact->update_by= Auth::id()?? 1;
        $contact->save();
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'contacts' => $contact],
            200
        );
    }
    public function deleteTrash(string $id)
    {
        $contact = Contact::find($id);
        if($contact == null){
            return response()->json(['success' => false, 'message' =>'Không tìm thấy liên hệ !']);
        }
        $contact->status = 0;
        $contact->updated_at = date('Y-m-d H:i:s');
        $contact->save();
        return response()->json(['success' => true, 'message' =>'Đã đưa liên hệ vào thùng rác !']);
    }
    public function RescoverTrash($id){
        $contact = Contact::find($id);
        if($contact == null){
            return response()->json(['success' => false, 'message' =>'Không tìm thấy liên hệ !']);
        }
        $contact->status = 2;
        $contact->updated_at = date('Y-m-d H:i:s');
        $contact->save();
        return response()->json(['success' => true, 'message' =>'Phục hồi thành công !']);
    }
}
