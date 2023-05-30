<template> 
  <div class="common-container">
    <div class="content">
      <el-input 
        v-model="code"
        :placeholder="$t('warranty.placeholder')"
      ></el-input>
      <el-button type="primary" @click="search" :loading="loading">
        {{ $t('common.search') }}
      </el-button>
      <transition name="fade" mode="out-in">
        <div v-show="showResult">
          <div 
            v-if="hasWarranty" 
            class="result"
          >
            <div v-if="+daysNum > 0">{{ $t('warranty.days',{num: daysNum}) }}</div>
            <div>
              <span>{{ $t('warranty.date') }}</span>
              <span>{{ date }}</span>
            </div>
          </div>
          <div 
            v-else
            class="result"
          >{{ $t('warranty.wrong') }}</div>
          <div class="warn-tips">
            {{ $t('warranty.tips') }}
          </div> 
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  ElInput,
  ElButton,
} from "element-plus"
import { formatExcelDate, diffDay } from "@/utils/formatDate"

const code = ref('')
const loading = ref(false)
const showResult = ref(false)
const hasWarranty = ref(true)
const date = ref('')
const daysNum = ref('')
const search = async() => {
  if(!code.value) {
    return
  }
  loading.value = true
  const data = await $fetch('/api/get-warranty', {
    method: 'POST',
    body: {
      SN_code: code.value
    }
  })
  showResult.value = true
  if(data.length) {
    hasWarranty.value = true
    //44972 2023/2/15 前325天质保，之后180天质保
    if(Number(data[0].date) > 44972) {
      date.value = formatExcelDate(Number(data[0].date) + 180)
    }else {
      date.value = formatExcelDate(Number(data[0].date) + 365)
    }
    daysNum.value = diffDay(date.value, new Date()).toFixed()
  }else {
    hasWarranty.value = false
  }
  loading.value = false
}
</script>

<style lang="less" scoped>
.common-container {
  display: flex;
  justify-content: center;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 520px;
  margin-top: 120px;
  .el-input {
    width: 300px;
    height: 40px;
    margin-bottom: 20px;
  }
  .el-button {
    width: 300px;
    height: 40px;
    margin-bottom: 20px;
    color: #fff;
  }
  .result {
    width: 100%;
    margin-bottom: 20px;
    padding: 10px;
    box-sizing: border-box;
    background-color: @main-color;
    border-radius: 10px;
    color: #fff;
    font-size: 20px;
    text-align: center;
  }
}

@media (max-width: 1024px){ 
  .common-container {
    margin: 60px 20px 0;
  }
  .content {
    width: 100%;
      .el-input {
        width: 100%;
      }
      .el-button {
        width: 100%;
      }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>