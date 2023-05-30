<template>
  <div class="common-container">
    <section class="banner">
    </section>
    <ClientOnly>
      <section>
        <div class="content d-flex-between">
          <div class="miner-box"></div>
          <div class="data-box">
            <div class="title">
              {{ $t('contact.customer') }}
            </div>
            <div class="sub-title">
              {{ $t('contact.service') }}
            </div>
            <el-form :model="form" ref="formRef">
              <el-form-item prop="name">
                <el-input v-model="form.name" :placeholder="$t('contact.name')" />
              </el-form-item>
              <el-form-item prop="email">
                <el-input v-model="form.email" :placeholder="$t('contact.email')" />
              </el-form-item>
              <el-form-item prop="tel">
                <el-input v-model="form.tel" :placeholder="$t('contact.tel')" />
              </el-form-item>
              <el-form-item prop="company">
                <el-input v-model="form.company" :placeholder="$t('contact.company')" />
              </el-form-item>
              <el-form-item prop="remark">
                <el-input v-model="form.remark" :placeholder="$t('contact.remark')"  type="textarea" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit" :loading="loading">{{ $t('contact.send') }}</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </section>
    </ClientOnly>

    <section>
      {{ $t('contact.dealer') }}
      <el-button class="link-button" type="primary" @click="linkToContact">
        <img src="/img/onestop-logo.png" alt="button">
      </el-button>
    </section>
  </div>
</template>
  
<script lang="ts" setup>
import { useI18n } from "vue-i18n"
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
  ElMessage
} from "element-plus"

const locale = useCookie('locale') ? useCookie('locale') : 'en'

const form = reactive({
  name: '',
  email: '',
  tel: '',
  company: '',
  remark: '',
})

const formRef = ref()
const i18n = useI18n()
const loading = ref(false)
const onSubmit = async () => {
  if(form.name || form.email || form.tel) {
    loading.value = true
    await $fetch('/api/send-email', {
      method: 'POST',
      body: form
    })
    setTimeout(() => {
      loading.value = false
      formRef.value.resetFields()
      ElMessage({
        message: i18n.t('contact.success'),
        type: 'success',
        offset: 200,
        center: true
      })
    }, 2000)
  }
}

const linkToContact = () => {
  const a = document.createElement('a')
  a.href = locale === 'en' ? 'https://cn.onestopmining.com/pages/contact-us' : 'https://cn.onestopmining.com/pages/contact-us'
  a.click()
}

</script>

<style lang="less" scoped>
.el-button {
  width: 80px;
  color: #fff;
}
.link-button {
  width: 240px;
  height: 60px;
  margin-top: 20px;
  img {
    width: 200px;
  }
}
.sub-title {
  font-size: 20px;
  font-weight: bold;
}
section {
  width: 1080px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto 60px;
  font-weight: bold;
  .content {
    width: 100%;
    height: 450px;
    .miner-box {
      width: 50%;
      height: 100%;
      background: url('/img/contact-form-bg.png');
      background-size: cover;
      box-shadow: -12px 12px 0px @main-color;
      img {
        width: 80%;
      }
    }
    .data-box {
      box-sizing: border-box;
      width: 50%;
      height: 100%;
      padding: 30px;
      border: 2px solid @main-color;
      border-left: none;
      div {
        margin-bottom: 8px;
      }
    }
  }
}
.banner {
  width: 100vw;
  height: 36vw;
  color: #fff;
  background: url('/img/contact-banner-bg.png');
  background-size: cover;
}

@media (max-width: 1024px){
  .sub-title {
    font-size: 16px;
  }
  .common-container {
    margin: 60px 0;
  }
  section {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    font-size: 12px;
    .content {
      .miner-box {
        box-shadow: -5px 5px 0px @main-color;
      }
    }
  }
}
</style>