import axios from 'axios';

export const useDummyDataStore = defineStore('dummyData', () => {
  const data = ref<any>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchData = async () => {
    loading.value = true;
    error.value = null;
    try {
      data.value = await $fetch('/api/hello');
    } catch (err) {
      error.value = (err as Error).message;
    } finally {
      loading.value = false;
    }
  };

  const fetchDataDirectly = async () => {
    loading.value = true;
    error.value = null;
    console.log('Calling Layer App Store')
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments');
       data.value = response.data;
    }catch(err){
        error.value = (err as Error).message
    }finally{
        loading.value = false;
    }
  }

  return { data, loading, error, fetchData , fetchDataDirectly };
});
