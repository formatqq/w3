<template>
  <div class="common-container d-flex-center">
    <article>
      <h1>{{ $t('clause.title') }}</h1>
      <p v-html="$t('clause.content1')"></p>
      <p v-html="$t('clause.content2')"></p>
      <p v-html="$t('clause.content3')"></p>
    </article>
  </div>
</template>

<style lang="less" scoped>
.common-container {
  text-align: center;
  article {
    width: 700px;
    text-align: left;
    h1,
    p {
      margin-bottom: 20px;
    }
    h1 {
      text-align: center;
      font-size: 24px;
    }
    p {
      font-size: 18px;
    }
  }
}
</style>
