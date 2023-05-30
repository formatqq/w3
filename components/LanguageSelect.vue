<template>
  <el-dropdown
    popper-class="short"
    @command="changelang"
  >
    <div>
      <img
        class="logo"
        src="/img/globle.png"
        alt="globle"
      />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in options"
          :key="item.value"
          :command="item"
        >
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

import { ElDropdown, ElDropdownItem, ElDropdownMenu } from 'element-plus'

const locale = useCookie('locale')

const i18n = useI18n()
const options = [
  {
    value: 'en',
    label: 'English',
  },
  {
    value: 'cn',
    label: '简体中文',
  },
  {
    value: 'ru',
    label: 'русский',
  },
]
const changelang = (item: { value: string }) => {
  i18n.locale.value = item.value
  locale.value = item.value
  location.reload()
}
</script>

<style lang="less" scoped>
.logo {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
</style>
