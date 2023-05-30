<template>
  <header>
    <el-menu
      :default-active="activeIndex2"
      mode="horizontal"
      background-color="#fff"
      text-color="#000"
      active-text-color="#F0AE4C"
      @select="handleSelect"
    >
      <img class="logo" src="/img/logo.png" alt="logo">
      <img class="sub-logo" src="/img/sub-logo.png" alt="logo">
      <el-menu-item index="index">{{ $t('header.home') }}</el-menu-item>
      <el-menu-item index="products">{{ $t('header.products') }}</el-menu-item>
      <el-menu-item index="contact">{{ $t('header.contact') }}</el-menu-item>
      <client-only>
        <el-sub-menu index="customer">
          <template #title>{{ $t('header.customer') }}</template>
          <el-menu-item index="firmware">{{ $t('header.download') }}</el-menu-item>
          <el-menu-item index="warranty">{{ $t('header.search') }}</el-menu-item>
          <el-menu-item index="clause">{{ $t('header.clause') }}</el-menu-item>
          <el-menu-item index="repair">{{ $t('header.repair') }}</el-menu-item>
        </el-sub-menu>
        <section class="right-menu">
          <Autocomplete class="mr20" />
          <LanguageSelect class="lang" />
        </section>
      </client-only>
    </el-menu>
  </header>
</template>

<script lang="ts" setup>
import LanguageSelect from "@/components/LanguageSelect.vue"
import Autocomplete from "@/components/Autocomplete.vue"

import {
  ElMenu,
  ElSubMenu,
  ElMenuItem,
} from "element-plus"

const activeIndex2 = ref('1')
const router = useRouter()
const handleSelect = (key: string, keyPath: string[]) => {
  if(keyPath.length > 2) {
    keyPath.shift()
  }
  const name = keyPath.join('-')
  router.push({
    name: name
  })
}

</script>

<style lang="less" scoped>
header {
  width: 100%;
  height: 60px;
  overflow: hidden;
  position: fixed;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .el-menu--horizontal {
    align-items: center;
    .el-menu-item {
      height: 60px;
      padding: 0 20px;
    }
  }
  .logo {
    width: 50px;
    height: 50px;
    margin: 0 20px 0 50px;
  }
  .sub-logo {
    width: 100px;
    height: 60px;
  }
  .right-menu {
    position: absolute;
    right: 40px;
  }
}
@media (max-width: 1024px){ 
  header {
  .logo {
    width: 50px;
    height: 50px;
    margin: 0 20px;
  }
  .right-menu {
    position: absolute;
    right: 40px;
  }
}
}
</style>