<?php

use Illuminate\Support\Str;



function perPage(){

    return 4;
}

function responseJsonSuccess($msg="success",$data=[]){ 
    return response()->json(['message' =>$msg,'status'=>true,'results'=>$data],200);
}

function genUUID(){
    return (string) Str::uuid();
}

function setSlug($val){
   return (string) Str::slug($val, '-');
}