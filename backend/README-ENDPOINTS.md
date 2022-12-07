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

___

## USER

### POST /api/v1/user/{id}
Create user

### GET /api/v1/user/
Get all users `authentication required`

### GET /api/v1/user/{id}
Get user by id `authentication required`

### PUT /api/v1/user/{id}
Complete update in user by id `authentication required`

### PATCH /api/v1/user/{id}
Partial update in user by id `authentication required`

### DELETE /api/v1/user/{id}
Delete user by id `authentication required`

## AUTH

### POST /api/v1/login/
Make login

### POST /api/v1/logout/
Make logout `authentication required`

### POST /api/v1/refresh/
Refresh the token `authentication required`

### POST /api/v1/me/
Get logged in user `authentication required`

## CLIENT

### GET /api/v1/client/
Get all clients `authentication required`

### GET /api/v1/client/{id}
Get client by id `authentication required`

### POST /api/v1/client/{id}
Create client `authentication required`

### PUT /api/v1/client/{id}
Complete update in client by id `authentication required`

### PATCH /api/v1/client/{id}
Partial update in client by id `authentication required`

### DELETE /api/v1/client/{id}
Delete client by id `authentication required`

## PRODUCT

### GET /api/v1/product/
Get all products `authentication required`

### GET /api/v1/product/{id}
Get product by id `authentication required`

### POST /api/v1/product/{id}
Create product `authentication required`

### PUT /api/v1/product/{id}
Complete update in product by id `authentication required`

### PATCH /api/v1/product/{id}
Partial update in product by id `authentication required`

### DELETE /api/v1/product/{id}
Delete product by id `authentication required`

## POSTAL CODE

### GET /api/v1/postal-code/
Get all postal codes `authentication required`

### GET /api/v1/postal-code/{id}
Get postal code by id `authentication required`

### POST /api/v1/postal-code/{id}
Create postal code `authentication required`

### PUT /api/v1/postal-code/{id}
Complete update in postal code by id `authentication required`

### PATCH /api/v1/postal-code/{id}
Partial update in postal code by id `authentication required`

### DELETE /api/v1/postal-code/{id}
Delete postal code by id `authentication required`

## PAYMENT METHOD

### GET /api/v1/payment-method/
Get all payment methods `authentication required`

### GET /api/v1/payment-method/{id}
Get payment method by id `authentication required`

### POST /api/v1/payment-method/{id}
Create payment method `authentication required`

### PUT /api/v1/payment-method/{id}
Complete update in payment method by id `authentication required`

### PATCH /api/v1/payment-method/{id}
Partial update in payment method by id `authentication required`

### DELETE /api/v1/payment-method/{id}
Delete payment method by id `authentication required`

## SALE

### GET /api/v1/sale/
Get all sales `authentication required`

### GET /api/v1/sale/{id}
Get sale by id `authentication required`

### POST /api/v1/sale/{id}
Create sale `authentication required`

### PUT /api/v1/sale/{id}
Complete update in sale by id `authentication required`

### PATCH /api/v1/sale/{id}
Partial update in sale by id `authentication required`

### DELETE /api/v1/sale/{id}
Delete sale by id `authentication required`

## SALE ITEM

### GET /api/v1/sale-item/
Get all sale items `authentication required`

### GET /api/v1/sale-item/{id}
Get sale item by id `authentication required`

### GET /api/v1/sale-item-by-sale/{id}
Get sale item by sale `authentication required`

### POST /api/v1/sale-item/{id}
Create sale item `authentication required`

### PUT /api/v1/sale-item/{id}
Complete update in sale item by id `authentication required`

### PATCH /api/v1/sale-item/{id}
Partial update in sale item by id `authentication required`

### DELETE /api/v1/sale-item/{id}
Delete sale item by id `authentication required`
