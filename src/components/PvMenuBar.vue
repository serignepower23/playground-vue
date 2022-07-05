<template>
  <Menubar>
    <template #start>
      <div>
        <i class="pi pi-fw pi-file" />
        {{ navBar.nomeUtente }}
      </div>
    </template>
    <template #end> After </template>
    <font-awesome-icon icon="fab fa-500px" />
  </Menubar>
</template>

<script>
import "primeicons/primeicons.css";
export default {
  name: "PvMenuBar",
  data() {
    return {
      navBar: {
        nomeUtente: "serigne",
        nomeIdea: "primo progetto",
        icona: String,
      },
    };
  },
};
</script>
<!-- <template #item="{ item }">
      {{ item.label }}
    </template> -->