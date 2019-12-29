/**
 * @Author: Laurent Vergerolle <laurent>
 * @Date:   2019-12-29T13:41:33-04:00
 * @Email:  laurent@ipeos.com
 * @Last modified by:   laurent
 * @Last modified time: 2019-12-29T17:56:02-04:00
 * @License: GPLv3
 */
var currency = new Vue({
  el: '#address-search',
  data: {
    address: '',
    addresses: []
  },
  methods: {
    search: function() {
      this.$http.get('https://api-adresse.data.gouv.fr/search/?q=' + this.address).then(response => {
        this.addresses = response.data.features;
        console.log(this.addresses);
      }).catch(error => {
        console.error(error);
      }).finally(() => {
        console.log('stop')
      });
    }
  }
})
