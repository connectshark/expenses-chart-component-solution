<template>
<div class="home">
  <header>
    <div>
      <h1 class="title">My balance</h1>
      <p class="balance">$921.48</p>
    </div>
    <figure class="logo">
      <img src="../assets/svg/logo.svg" alt="log">
    </figure>
  </header>
  <div class="body">
    <main>
      <h2>Spending - Last 7 days</h2>
      <div id="container"></div>
    </main>
    <footer>
      <h3>Total this month</h3>
      <div class="row">
        <p class="total">$478.33</p>
        <div>
          <p class="percent">+2.4%</p>
          <p class="tip">from last month</p>
        </div>
      </div>
    </footer>
  </div>
</div>
</template>

<script setup>
import { watch } from 'vue'
import useChart from '../composable/useChart'
import useFetch from '../composable/useFetch'


const {
  data
} = useFetch()
const {
  createChart
} = useChart()

watch(data, arr => {
  const currentDay = new Date().getDay()
  const newData = arr.map(item => item.amount)
  newData.splice(currentDay, 1, { y: newData[currentDay], color: '#76b5bc' })
  const categories = arr.map(item => item.day)
  createChart({
    data: newData,
    categories 
  })
})

</script>

<style scoped>
.home {
  display: grid;
  gap: 1rem;
}
header {
  box-sizing: border-box;
  padding: 1rem;
  color: var(--neutral-orange);
  background-color: var(--primary-red);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 350px;
  text-align: left;
}
.title {
  font-size: var(--font-size-small);
  margin-bottom: 1rem;
}
.balance {
  font-weight: var(--font-bold);
}
.logo {
  width: 50px;
}
.logo img {
  width: 100%;
  vertical-align: middle;
}

.body {
  background-color: var(--neutral-orange);
  box-sizing: border-box;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  text-align: left;
}
h2 {
  line-height: 2;
  font-weight: var(--font-bold);
}
#container {
  width: 100%;
  height: 200px;
}

footer {
  border-top: 2px solid var(--neutral-cream);
  padding-top: 1.5rem;
}
h3, .tip {
  color: var(--neutral-medium-brown);
  font-size: var(--font-size-small);
}
.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.total {
  font-size: 24px;
  font-weight: var(--font-bold);
  line-height: 2;
}
.percent {
  text-align: right;
  font-weight: var(--font-bold);
}
</style>