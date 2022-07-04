## How to start the API?

```
$ composer install
$ php artisan serve
```

## How to build endpoints in Laravel

Taking example of building the Facilities Infra -

-   If a migration for the table you want to use does not exist already then -

```
$ php artisan make:migration create_facilities_table
```

In the Migration class, create the table structure as shown in the file - `v3server/database/migrations/2022_07_04_154105_create_facilities_table.php`

-   Once the migration is up. Run the following command to create tables for the outstanding migrations -

```
$ php artisan migrate
```

-   Next, create model for your new table -

```
$ php artisan make:model Facility
```

After defining methods for the model as shown in `v3server/app/Models/Facility.php`

-   Once the model is completed, time to make the controller -

Create the controller in the directory `v3server/app/Http/Controllers` using `v3server/app/Http/Controllers/FacilityController.php` as reference.

-   After that only have to create the route that will be called by our Front End in the file `v3server/routes/web.php`.

Refer to the route groups and create your own or add a route to an existing route group.
