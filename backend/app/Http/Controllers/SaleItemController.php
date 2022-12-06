<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSaleItemRequest;
use App\Http\Requests\UpdateSaleItemRequest;
use App\Models\SaleItem;
use App\Models\Product;

class SaleItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return SaleItem::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreSaleItemRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSaleItemRequest $request)
    {
        // Decrement stock
        Product::find($request['product_id'])->decrement('quantity', $request['quantity']);

        return SaleItem::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SaleItem  $saleItem
     * @return \Illuminate\Http\Response
     */
    public function show(SaleItem $saleItem)
    {
        return $saleItem;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateSaleItemRequest  $request
     * @param  \App\Models\SaleItem  $saleItem
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSaleItemRequest $request, SaleItem $saleItem)
    {
        return $saleItem->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SaleItem  $saleItem
     * @return \Illuminate\Http\Response
     */
    public function destroy(SaleItem $saleItem)
    {
        // Increment stock
        Product::find($saleItem['product_id'])->increment('quantity', $saleItem['quantity']);
        
        $saleItem->delete();
        return ['msg' => 'Sale item deleted'];
    }
}
