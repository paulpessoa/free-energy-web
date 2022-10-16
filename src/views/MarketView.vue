<template>
  <div>
    <h1>This is an Market page</h1>
  <DragglableComponent />
</div>
</template>

<script>
import DragglableComponent from "@/components/DraggableComponent.vue";
export default {
name: "MarketView",
components: {
  DragglableComponent
}
};
</script>
