<template>
  <el-autocomplete
    v-model="state"
    :fetch-suggestions="querySearch"
    popper-class="my-autocomplete"
    @select="handleSelect"
  >
    <template #suffix>
      <el-icon class="el-input__icon">
        <Search />
      </el-icon>
    </template>
    <template #default="{ item }">
      <div class="value">{{ item.value }}</div>
    </template>
  </el-autocomplete>
</template>

<script lang="ts" setup>
import {
  ElIcon,
  ElAutocomplete
} from "element-plus"
import { onMounted } from 'vue'
import { useI18n } from "vue-i18n"

interface LinkItem {
  value: string
  link: string
}

const state = ref('')
const links = ref<LinkItem[]>([])

interface RestaurantItem {
  value: string
  link: string
}

const querySearch = (queryString: string, cb: Function) => {
  const results = queryString
    ? links.value.filter(createFilter(queryString))
    : links.value
  // call callback function to return suggestion objects
  cb(results)
}
const createFilter = (queryString: string) => {
  return (restaurant: RestaurantItem) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}

const i18n = useI18n()
const router = useRouter()

const loadAll = () => {
  return [
    { value: i18n.t('header.search'), link: 'customer-warranty' },
    { value: i18n.t('header.download'), link: 'customer-firmware' },
    { value: i18n.t('header.repair'), link: 'customer-repair' },
    { value: i18n.t('header.products'), link: 'products' },
    { value: i18n.t('header.contact'), link: 'contact' },
    { value: i18n.t('header.clause'), link: 'customer-clause' },
  ]
}
const handleSelect = (item: Record<string, any>) => {
  router.push({
    name: item.link
  })
}

onMounted(() => {
  links.value = loadAll()
})
</script>

<style lang="less" scoped>
</style>