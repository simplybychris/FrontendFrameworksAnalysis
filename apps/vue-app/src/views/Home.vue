<template>
  <!-- eslint-disable max-len -->
  <div class="container py-5">
    <div class="p-5 mb-5 bg-dark rounded-3 d-flex flex-column align-items-center">
      <h1 class="pb-5 text-white">Vue.js 3.0.0</h1>
      <p>
        <button class="btn btn-primary mx-2 createThousandRows" type="button" @click.prevent="data = generateData(1000)">Create 1.000 rows</button>
        <button class="btn btn-primary mx-2 update" type="button" @click.prevent="update()">Update every 5th row</button>
        <button class="btn btn-primary mx-2 append" type="button" @click.prevent="append()">Append 1.000 rows</button>
      </p>
      <p class="pb-5">
        <button class="btn btn-primary mx-2 createTenThousandRows" type="button" @click.prevent="data = generateData(10000)">Create 10.000 rows</button>
        <button class="btn btn-primary mx-2 remove" type="button" @click.prevent="remove()">Remove every 5th row</button>
        <button class="btn btn-primary mx-2 clear" type="button" @click.prevent="clear()">Clear</button>
      </p>
      <button class="btn btn-secondary mx-2" type="button" @click="$router.push('second')">Go to 2nd page</button>
    </div>
    <p>Rows count: {{data.length}}</p>
    <div class="bg-dark rounded-3">
      <table class="table text-white">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
        </tr>
        </thead>
        <tbody class="table-group-divider">
        <tr v-for="row in data" v-bind:key="row.id">
          <th scope="row">{{ row.id }}</th>
          <td>{{ row.name }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

  </template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Data {
  id: number;
  name: string;
}

interface BaseComponentData {
  title: string;
  data: Data[];
  id: number;
}

export default defineComponent({
  data(): BaseComponentData {
    return {
      title: '',
      data: [],
      id: 1,
    };
  },

  mounted() {
    this.title = 'Vue';
    this.data = this.generateData(100);
  },

  methods: {
    random(max: number): number {
      return Math.round(Math.random() * 1000) % max;
    },

    generateData(count = 1000): Data[] {
      const adjectives = ['elegant', 'coherent', 'comprehensive', 'like', 'ragged', 'organic', 'ambiguous', 'wiry', 'clever', 'violet'];
      const items = ['toothpick', 'phone', 'computer', 'hat', 'socks', 'car', 'shirt', 'rock', 'pad', 'paper'];

      const data = new Array<Data>();

      for (let i = 0; i < count; i += 1) {
        data.push({
          id: this.id,
          name: `${adjectives[this.random(adjectives.length)]} ${items[this.random(items.length)]}`,
        });

        this.id += 1;
      }

      return data;
    },

    append() {
      for (let i = 0; i < 10; i += 1) {
        const id = this.random(this.data.length);
        this.data.splice(id, 0, ...this.generateData(100));
      }
    },

    update() {
      for (let i = 0; i < this.data.length; i += 5) {
        this.data[i].name = `updated ${this.data[i].name}`;
      }
    },

    createThousandRows() {
      this.data = this.data.concat(this.generateData(1000));
    },

    createTenThousandRows() {
      this.data = this.data.concat(this.generateData(10000));
    },

    remove() {
      for (let i = 0; i < this.data.length; i += 5) {
        this.data.splice(i, 1);
      }
    },

    clear() {
      this.data = [];
    },
  },
});

</script>
