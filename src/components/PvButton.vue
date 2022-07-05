<template>
  <div>
    <Button
      :label="label"
      :icon="isIconed ? icon : null"
      :isIconed="isIconed"
    />
  </div>
</template>
//valoreVal(allwaysBool) ? risposta vera: risposta falsa
<script>
export default {
  name: "PvButton",

  props: {
    label: String,
    icon: String,
    isIconed: Boolean,
  },
};
</script>