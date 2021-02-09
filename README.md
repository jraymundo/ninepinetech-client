#NinPineTech Exam

# Install
    > npm install
    > change the url on the all-vehicles.vue pointing to the API http://YOUR-SITE-URL/vehicle

# Run
    > npm run dev
    
Navigation to http://localhost:8080 to view the site
    
# Start API

Just point your sites to the public folder

    > composer install
    > create database ninpinetech
    > run the sql on the migration file
    
    > POST - {url}/vehicle
        body {
             "unique_identifier": "1HGBH41JXMN109187",
             "name": "sample car",
             "engine_displacement": "1L",
             "engine_power": "power of the engine",
             "price": 90.00,
             "location": "philippines"
         }
    > GET - {url}/vehicle - Get all Vehicles
    
# API Test

    > vendor/bin/phpunit tests
    
   
