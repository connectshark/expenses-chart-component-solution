import { onBeforeMount, ref } from 'vue'

export default function () {
  const data = ref([])

  const doFetch = async () => {
    const fetch_response = await fetch('./data.json')
    const fetch_data = await fetch_response.json()
    data.value = fetch_data
  }

  onBeforeMount(doFetch)

  return {
    data
  }
}