# API endpoints

## USER

### No Authentication
`POST` [/api/v1/user/{id}](#post-user) <br/>

### Authentication Required
`GET` [/api/v1/user/](#get-user) <br/>
`GET` [/api/v1/user/{id}](#get-user-by-id) <br/>
`PUT` [/api/v1/user/{id}](#put-user) <br/>
`PATCH` [/api/v1/user/{id}](#patch-user) <br/>
`DELETE` [/api/v1/user/{id}](#delete-user) <br/>

## AUTH

### No Authentication
`POST` [/api/v1/login/](#post-login) <br/>

### Authentication Required
`POST` [/api/v1/logout/](#post-logout) <br/>
`POST` [/api/v1/refresh/](#post-refresh) <br/>
`POST` [/api/v1/me/](#post-me) <br/>

## CLIENT

### Authentication Required
`GET` [/api/v1/client/](#get-client) <br/>
`GET` [/api/v1/client/{id}](#get-client-by-id) <br/>
`POST` [/api/v1/client/{id}](#post-client) <br/>
`PUT` [/api/v1/client/{id}](#put-client) <br/>
`PATCH` [/api/v1/client/{id}](#patch-client) <br/>
`DELETE` [/api/v1/client/{id}](#delete-client) <br/>

## PRODUCT

### Authentication Required
`GET` [/api/v1/product/](#get-product) <br/>
`GET` [/api/v1/product/{id}](#get-product-by-id) <br/>
`POST` [/api/v1/product/{id}](#post-product) <br/>
`PUT` [/api/v1/product/{id}](#put-product) <br/>
`PATCH` [/api/v1/product/{id}](#patch-product) <br/>
`DELETE` [/api/v1/product/{id}](#delete-product) <br/>

## POSTAL CODE

### Authentication Required
`GET` [/api/v1/postal-code/](#get-postal-code) <br/>
`GET` [/api/v1/postal-code/{id}](#get-postal-code-by-id) <br/>
`POST` [/api/v1/postal-code/{id}](#post-postal-code) <br/>
`PUT` [/api/v1/postal-code/{id}](#put-postal-code) <br/>
`PATCH` [/api/v1/postal-code/{id}](#patch-postal-code) <br/>
`DELETE` [/api/v1/postal-code/{id}](#delete-postal-code) <br/>

## PAYMENT METHOD

### Authentication Required
`GET` [/api/v1/payment-method/](#get-payment-method) <br/>
`GET` [/api/v1/payment-method/{id}](#get-payment-method-by-id) <br/>
`POST` [/api/v1/payment-method/{id}](#post-payment-method) <br/>
`PUT` [/api/v1/payment-method/{id}](#put-payment-method) <br/>
`PATCH` [/api/v1/payment-method/{id}](#patch-payment-method) <br/>
`DELETE` [/api/v1/payment-method/{id}](#delete-payment-method) <br/>

## SALE

### Authentication Required
`GET` [/api/v1/sale/](#get-sale) <br/>
`GET` [/api/v1/sale/{id}](#get-sale-by-id) <br/>
`POST` [/api/v1/sale/{id}](#post-sale) <br/>
`PUT` [/api/v1/sale/{id}](#put-sale) <br/>
`PATCH` [/api/v1/sale/{id}](#patch-sale) <br/>
`DELETE` [/api/v1/sale/{id}](#delete-sale) <br/>

## SALE ITEM

### Authentication Required
`GET` [/api/v1/sale-item/](#get-sale-item) <br/>
`GET` [/api/v1/sale-item/{id}](#get-sale-item-by-id) <br/>
`GET` [/api/v1/sale-item-by-sale/{id}](#get-sale-item-by-sale) <br/>
`POST` [/api/v1/sale-item/{id}](#post-sale-item) <br/>
`PUT` [/api/v1/sale-item/{id}](#put-sale-item) <br/>
`PATCH` [/api/v1/sale-item/{id}](#patch-sale-item) <br/>
`DELETE` [/api/v1/sale-item/{id}](#delete-sale-item) <br/>
