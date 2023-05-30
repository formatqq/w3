<template>
  <div class="common-container">
    <swiper :modules="modules" :slides-per-view="1" :space-between="50" :autoplay="{ delay: 5000 }"
      :pagination="{ clickable: true }">
      <swiper-slide>
        <section class="banner" id="banner01">
          <div class="content d-flex-between">
            <div>
              <h1>HAMMER</h1>
              <h2 class="num">D10+</h2>
              <h2>DOGE / LTC</h2>
              <h3>BUILD YOUR FUTURE WITH US !</h3>
            </div>
            <img class="miner" src="/img/miner.png" alt="miner">
          </div>
        </section>
      </swiper-slide>
      <swiper-slide>
        <section class="banner" id="banner02" @click="scrollInto('.brand-section')">
          <!-- <div class="content d-flex-between">
            <div>
              <h1>{{ $t('home.brandTitle') }}</h1>
              <div class="split-line"></div>
              <span v-html="$t('home.brandSubTitle')"></span>
            </div>
            <img class="brand" src="/img/brand.png" alt="brand">
          </div> -->
        </section>
      </swiper-slide>
    </swiper>
    <section class="params-seciton">
      <div class="title">
        <div>{{ $t('home.params') }}</div>
        <img src="/img/sub-line.png">
      </div>
      <div class="content d-flex">
        <div v-for="item of paramsList" class="params-box">
          <img class="describe mb10" :src='`/img/params${item.id}.png`'>
          <div class="describe-title" v-html="$t(`home.params${item.id}_title`)" />
          <div class="params">
            <div v-for="params of item.paramsNum">
              {{ $t(`home.params${item.id}_${params}`) }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="brand-section">
      <div class="title">
        <div>{{ $t('home.brand') }}</div>
        <img src="/img/sub-line.png">
      </div>

      <div class="d-flex-center">
        <img class="brand" src="/img/brand.png" alt="brand">
      </div>
    </section>

    <section class="shop-section">
      <div class="title">
        <div>{{ $t('home.shop') }}</div>
        <img src="/img/sub-line.png">
      </div>
      <div class="content d-flex-between">
        <a v-for="item of shopsList" :href="item.link" target="_blank">
          <img :src='`/img/${item.name}.png`'>
        </a>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { Pagination, A11y, Autoplay } from 'swiper'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

const modules = [Pagination, A11y, Autoplay]

const paramsList = ref([
  {
    id: '01',
    paramsNum: 8
  },
  {
    id: '02',
    paramsNum: 3
  },
  {
    id: '03',
    paramsNum: 6
  },
  {
    id: '04',
    paramsNum: 3
  }
])

const shopsList = ref([
  {
    name: 'amazon',
    link: '//www.amazon.com/dp/B0BHNQ3GM6'
  },
  {
    name: 'ebay',
    link: '//www.ebay.com/itm/354136904551'
  },
  {
    name: 'shopify',
    link: '//onestopmining.shop/'
  },
])

const scrollInto = (anchor: string) => {
  const element = document.querySelector(anchor)
  element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
</script>

<style lang="less" scoped>
section {
  width: 1080px;
  margin: 0 auto 50px;

  .title {
    width: fit-content;
    font-size: 24px;
    margin-bottom: 40px;

    img {
      width: 100%;
      max-width: 300px;
      height: 8px;
    }
  }
}

.banner {
  width: 100vw;
  height: 36vw;
  color: #fff;

  &#banner01 {
    background: #1B1B1B url('/img/banner-bg.png');
    background-size: cover;

    .content {
      width: 60%;
      position: absolute;
      z-index: 2;
      margin-top: 5%;
      right: 10%;

      h1 {
        font-size: 4vw;
        color: @main-color;
        text-decoration: underline;
      }
    }
  }

  &#banner02 {
    background: url('/img/banner2-bg.png');
    background-size: cover;
    cursor: pointer;

    .content {
      width: 1080px;
      margin: 0 auto;
      height: 100%;
      background-size: cover;

      h1 {
        font-size: 4vw;
        color: @main-color;
        font-weight: normal;
      }

      .brand {
        width: 20vw;
        height: auto;
      }

      .split-line {
        width: 160px;
        height: 3px;
        margin: 20px 0;
        background-color: @main-color;
      }

      span {
        font-size: 28px;
        color: #000;
      }
    }
  }

  .miner {
    width: 20vw;
  }

  .num {
    font-family: 'Roboto';
  }

  h2 {
    font-size: 4vw;
    font-weight: normal;
  }

  h3 {
    font-size: 2vw;
    font-weight: normal;
  }
}

.params-seciton {
  .content {
    flex-wrap: wrap;
    border: 1px solid @main-color;

    .params-box {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;

      .title {
        margin-bottom: 10px;
      }

      .describe {
        width: 25%;
      }

      .describe-title {
        font-size: 20px;
        margin-bottom: 10px;
        text-align: center;
        color: rgba(83, 86, 87);
        font-weight: bold;
      }

      &:nth-child(even) {
        background-color: @main-color;
        color: #fff;

        .describe-title {
          color: #fff;
        }
      }

      .params {
        width: 100%;
        text-align: left;
      }
    }
  }
}

.brand-section {
  img {
    width: 40%;
  }

  .text-content {
    width: 60%;
    border: 1px solid #000;
    border-left: none;
  }
}

.shop-section {
  .content {
    width: 60%;
    margin: 0 auto;
  }
}

@media (max-width: 1024px) {
  .common-container {
    margin: 60px 0;
  }

  section {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;

    .title {
      font-size: 18x;
    }
  }

  .banner {
    &#banner02 {
      .content {
        width: 80%;

        .split-line {
          width: 120px;
          margin: 10px 0;
        }

        span {
          font-size: 12px;
        }
      }
    }
  }


  .params-seciton {
    .content {
      .params-box {
        box-sizing: border-box;
        flex: auto;
        width: 100%;
      }
    }
  }

  .brand-section {
    img {
      width: 100%;
    }
  }

  .shop-section {
    .content {
      width: 100%;
      margin: 0 auto;
    }
  }
}
</style>