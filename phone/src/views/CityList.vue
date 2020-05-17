<template>
  <div class=" text-dark-1 bg-bgc">
    <div class="py-1 d-flex flex-column">
      <span class="px-4 py-1">定位城市</span>
      <div class="px-4  bg-bgc-1 d-flex jc-start">
        <div class="cityBtn mt-2 mb-1 mx-1">定位失败</div>
      </div>
    </div>
    <div v-show="showHistory" class="py-1 d-flex flex-column">
      <span class="px-4 py-1">最近访问城市</span>
      <div class="px-4  py-1 bg-bgc-1 d-flex flex-wrap jc-start">
        <div class="cityBtn mt-2 mb-1 mx-1" v-for="city in historyCity" :key = "city._id" @click="selectCity(city)">{{city.nm}}</div>
      </div>
    </div>
    <div class="py-1 d-flex flex-column">
      <span class="px-4 py-1">热门城市</span>
      <div class="px-4  py-1 bg-bgc-1 d-flex flex-wrap jc-start">
        <div class="cityBtn mt-2 mb-1 mx-1" v-for="city in hotList" :key = "city._id" @click="selectCity(city)">{{city.nm}}</div>
      </div>
    </div>
    <div>
        <mt-index-list>
          <mt-index-section :index="data.index" v-for="data in dataList" :key="data.index">
            <mt-cell v-for="city in data.list" :title="city.nm" :key = "city._id" @click.native="selectCity(city)"></mt-cell>
          </mt-index-section>
        </mt-index-list>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      cityList: [],
      hotList: [],
      historyCity: [],
      dataList: [],
    };
  },

  mounted() {
    const cityListData = localStorage.getItem('my_citylist');
    const historyData = localStorage.getItem('my_history_citylist');
    if (!cityListData) {
      this.$http.get('/api/citylist').then((res) => {
        this.cityList = res.data;
        localStorage.setItem('my_citylist', JSON.stringify(this.cityList));
        this.hotList = this.cityList.slice(0, 11);
        this.dataList = this.handleCities(this.cityList);
      });
    } else {
      this.cityList = JSON.parse(cityListData);
      this.hotList = this.cityList.slice(0, 11);
      this.historyCity = historyData ? JSON.parse(historyData) : [];
      this.dataList = this.handleCities(this.cityList);
    }
  },
  computed: {
    showHistory() {
      return this.historyCity.length > 0;
    },
  },
  methods: {
    handleCities(cityList) {
      const letterArr = [];
      for (let i = 65; i <= 90; i++) {
        letterArr.push(String.fromCharCode(i));
      }
      const newList = [];
      for (let j = 0; j < letterArr.length; j++) {
        const tempList = cityList.filter((item) => item.py.substring(0, 1) === letterArr[j].toLowerCase());
        if (tempList.length > 0) {
          newList.push({
            index: letterArr[j],
            list: tempList,
          });
        }
      }
      return newList;
    },
    selectCity(city) {
      let findIdx = -1;
      this.historyCity.forEach((ele, idx) => {
        if (ele._id === city._id) {
          findIdx = idx;
        }
      });

      if (findIdx > -1) {
        this.historyCity.splice(findIdx, 1);
        this.historyCity.unshift(city);
      } else {
        if (this.historyCity.length >= 3) {
          this.historyCity.pop();
        }
        this.historyCity.unshift(city);
      }
      localStorage.setItem('my_history_citylist', JSON.stringify(this.historyCity));
      this.$router.push('/film');
    },
  },
};
</script>

<style>

</style>
