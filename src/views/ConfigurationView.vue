<template>
  <div>
    <h1>This is an configuration page</h1>
    <DragglableComponent />
  </div>
</template>

<script>
import DragglableComponent from "@/components/DraggableComponent.vue";
export default {
  name: "ConfigurationView",
  components: {
    DragglableComponent
  }
};
</script>
