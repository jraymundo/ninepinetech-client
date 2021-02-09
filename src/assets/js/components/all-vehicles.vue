
<template>
        <div class="row" id="all-vehicles">
            <div class="col-md-8">
                <h1>Vehicles</h1>
                <table class="table table-hover">
                    <thead>
                    <tr>
                        <td>Unique Identifier</td>
                        <td>Name</td>
                        <td>Engine Displacement</td>
                        <td>Engine Power</td>
                        <td>Price</td>
                        <td>Loation</td>
                    </tr>
                    </thead>

                    <tbody>
                    <tr v-for="vehicle in vehicles">
                        <td>{{ vehicle.unique_identifier }}</td>
                        <td>{{ vehicle.name }}</td>
                        <td>{{ vehicle.engine_displacement }}</td>
                        <td>{{ vehicle.engine_power }}</td>
                        <td>{{ vehicle.price }}</td>
                        <td>{{ vehicle.location }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-md-4">
                <div id="create-vehicle">
                    <h1>Create Vehicle</h1>

                    <notification v-bind:notifications="notifications"></notification>

                    <form v-on:submit.prevent="addVehicle">
                        <div class="form-group">
                            <label name="vehicle_unique_identifier">Unique Identifier</label>
                            <input type="text" class="form-control" v-model="vehicle.unique_identifier" id="vehicle_unique_identifier" maxlength="17" required>
                        </div>

                        <div class="form-group">
                            <label name="vehicle_name">Name</label>
                            <input type="text" class="form-control" v-model="vehicle.name" id="vehicle_name" required>
                        </div>

                        <div class="form-group">
                            <label name="vehicle_engine_displacement">Engine Displacement</label>
                            <input type="text" class="form-control" v-model="vehicle.engine_displacement" id="vehicle_engine_displacement" required>
                        </div>

                        <div class="form-group">
                            <label name="vehicle_engine_power">Engine Power</label>
                            <input type="text" class="form-control" v-model="vehicle.engine_power" id="vehicle_engine_power" required>
                        </div>

                        <div class="form-group">
                            <label name="vehicle_price">Price</label>
                            <input type="text" class="form-control" v-model="vehicle.price" id="vehicle_price" required>
                        </div>

                        <div class="form-group">
                            <label name="vehicle_location">Location</label>
                            <input type="text" class="form-control" v-model="vehicle.location" id="vehicle_location" required>
                        </div>

                        <div class="form-group">
                            <button class="btn btn-primary">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

</template>

<script>
  import Notification from './notifications.vue';

  export default {
    data() {
      return {
        vehicles: [],
        vehicle:{},
        notifications:[]
      };
    },

    created: function() {
      this.fetchVehicleData();
    },

    methods: {
      fetchVehicleData: function() {
        this.$http.get('http://YOUR-SITE-URL/vehicle').then((response) => {
          this.vehicles = response.body;
        }, (response) => {

        });
      },

      addVehicle: function()
      {
        this.notifications = [];

        let price = parseFloat(this.vehicle.price);

        if(isNaN(price))
        {
          this.notifications.push({
            type: 'danger',
            message: 'Price must be a number'
          });
          return false;
        } else {
          this.vehicle.price = this.vehicle.price;
        }

        this.$http.post('http://YOUR-SITE-URL/vehicle', this.vehicle, {
          headers : {
            'Content-Type' : 'application/json'
          }
        }).then((response) => {
          this.fetchVehicleData();
          this.vehicle = {};
          this.notifications.push({
            type: 'success',
            message: 'Vehicle created successfully'
          });
        }, (response) => {
          this.notifications.push({
            type: 'danger',
            message: response.body.message
          });
        });
      }
    },
    components: {
      'notification' : Notification
    }
  };
</script>
