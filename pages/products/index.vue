<template>
  <div class="common-container">
    <section class="banner">
      <div class="content d-flex-between">
        <div class="text-box">
          <h1 class="num">HAMMER D10+</h1>
          <h2>DOGE / LTC</h2>
        </div>
        <img class="miner" src="/img/product-banner-miner.png" alt="miner">
      </div>
    </section>
    <section>
      <div class="title">{{ $t('products.miner') }}</div>
      <div class="content d-flex-between">
        <div class="miner-box d-flex-center">
          <img class="miner" src="/img/product-miner01.png" alt="miner">
        </div>
        <div class="data-box d-flex-center">
          <span class="power">{{ $t('products.power') }}</span>
        </div>
      </div>
    </section>
    <section>
      <div class="title">{{ $t('products.modes') }}</div>
      <div class="content d-flex-between reverse">
        <div class="miner-box d-flex-center">
          <img class="miner" src="/img/product-miner02.png" alt="miner">
        </div>
        <div class="data-box">
          <div class="mode-box">
            <div class="mode-cycle low" v-html="$t('products.low')"></div>
            <div class="mode-cycle high" v-html="$t('products.high')"></div>
          </div>
          <div class="warn">
            {{ $t('products.warn') }}
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="title">{{ $t('products.roi') }}</div>
      <div class="content d-flex-between">
        <div class="miner-box d-flex-center">
          <img class="miner" src="/img/product-miner03.png" alt="miner">
        </div>
        <div class="data-box payback-box">
          <div>{{ $t('products.payback') }}</div>
          <img :src="`/img/payback-${locale}.png`" alt="payback">
          <span>{{ $t('products.roi') }}≥300%</span>
        </div>
      </div>
    </section>
    <section>
      <div class="title no-margin">{{ $t('products.service') }}</div>
      <div class="sub-title">{{ $t('products.global') }}</div>
      <div class="address">
        <img src="/img/address.png" alt="address">
        <div v-html="$t('products.tips')" class="tips"></div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const locale = useCookie('locale') ? useCookie('locale') : 'en'
</script>

<style lang="less" scoped>
section {
  width: 1080px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto 60px;
  font-weight: bold;

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 40px;
    margin-bottom: 40px;
    background: url('/img/product-title-bg.png') no-repeat;
    background-position: center;
    background-size: 100% auto;
    text-align: center;
    color: #fff;
    font-size: 26px;

    &.no-margin {
      margin-bottom: 10px;
    }
  }

  .sub-title {
    font-size: 26px;
    color: @main-color;
    margin-bottom: 10px;
  }

  .content {
    width: 100%;
    height: 400px;

    .miner-box {
      width: 60%;
      height: 100%;
      background-color: rgb(244, 244, 244);
      box-shadow: -12px 12px 0px @main-color;

      img {
        width: 80%;
      }
    }

    .data-box {
      width: 40%;
      height: 100%;
      border: 2px solid @main-color;
      border-left: none;

      .power {
        display: block;
        width: 80%;
        margin: 0 auto;
        font-size: 24px;
      }
    }

    &.reverse {
      flex-direction: row-reverse;

      .miner-box {
        box-shadow: 12px 12px 0px @main-color;
      }

      .data-box {
        border-left: 2px solid @main-color;
        border-right: none;
      }
    }

    .mode-box {
      width: 100%;
      height: 80%;
      position: relative;

      .mode-cycle {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 180px;
        height: 180px;

        &.low {
          position: absolute;
          top: 10px;
          left: 10px;
          background: url('/img/low-mode.png');
          background-position: center;
          background-size: cover;
        }

        &.high {
          position: absolute;
          right: 10px;
          bottom: 10px;
          background: url('/img/high-mode.png');
          background-position: center;
          background-size: cover;
        }
      }
    }

    .warn {
      color: red;
      text-align: center;
      margin: 10px 5px 0;
    }

    .payback-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      div {
        font-size: 20px;
      }

      span {
        font-size: 36px;
        color: @main-color;
      }

      img {
        width: 70%;
        margin: 20px 0;
      }
    }
  }

  .address {
    width: 100%;
    position: relative;

    img {
      width: 100%;
    }
  }

  .tips {
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    padding: 10px;
    background: rgba(#fff, 0.3)
  }
}

.banner {
  width: 100vw;
  height: 36vw;
  color: #fff;
  background: url('/img/product-banner-bg.png');
  background-size: cover;

  .content {
    height: 100%;
    padding: 20px;
    box-sizing: border-box;

    .text-box {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: rgba(#fff, 0.2);

      h1 {
        font-size: 4vw;
        color: @main-color;
        text-shadow: 1px 1px 3px #333;
      }

      h2 {
        font-size: 4vw;
        font-weight: normal;
        text-shadow: 1px 1px 3px #333;
      }

      .num {
        font-family: 'Roboto';
      }
    }

    .miner {
      width: 40%
    }
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
    font-size: 12px;

    .title {
      width: 300px;
      font-size: 20px;
    }

    .sub-title {
      font-size: 20px;
    }

    .content {
      height: 300px;

      .miner-box {
        width: 50%;
        box-shadow: -5px 5px 0px @main-color;
      }

      &.reverse {
        .miner-box {
          box-shadow: 5px 5px 0px @main-color;
        }
      }

      .data-box {
        width: 50%;
      }

      .mode-box {
        height: 78%;

        .mode-cycle {
          width: 110px;
          height: 110px;
        }
      }

      .warn {
        margin: 0px 2px;
      }

      .payback-box {
        div {
          text-align: center;
          font-size: 13px;
        }

        span {
          font-size: 16px;
        }

        img {
          width: 80%;
        }
      }
    }

    .tips {
      width: 100%;
    }
  }
}</style>