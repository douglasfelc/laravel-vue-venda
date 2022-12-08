<template>
  <div :class="baseClass">
    <button :type="type" @click="onClick()">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button'
    },
    redirect: {
      type: String,
      default: ''
    },    
    variant: {
      type: String,
      default: ''
    }
  },
  computed: {
    baseClass() {
      return [
        'btn',
        this.variant ? `btn-${this.variant}` : ''
      ]
    }
  },
  methods: {
    onClick() {
      if( this.redirect ){
        window.open(this.redirect, '_self')
      }
    }
  }
}
</script>

<style scoped>
button {
  background-color: #292f3a;
  color: white;
  padding: 14px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #187bcd;
}

.btn-primary {
  background-color: #4CAF50;
}

.btn-secondary {
  background-color: #008CBA;
}

.btn-success {
  background-color: #f44336;
}

.btn-danger {
  background-color: #e7e7e7;
  color: black;
}

.btn-warning {
  background-color: #555555;
}

.btn-info {
  background-color: #555555;
}

.btn-light {
  background-color: #555555;
}

.btn-dark {
  background-color: #555555;
}

.btn-link {
  background-color: #555555;
}
</style>
