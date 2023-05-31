<template>
  <div class="common-container">
    <section>
      <el-descriptions
        v-for="item of repairSitesList"
        :column="2"
        direction="vertical"
        :title="item.city"
        border
      >
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon>
                <user />
              </el-icon>
              {{ $t('repair.contact') }}
            </div>
          </template>
          {{ item.contact }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon>
                <iphone />
              </el-icon>
              {{ $t('repair.telephone') }}
            </div>
          </template>
          {{ item.telephone }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon>
                <office-building />
              </el-icon>
              {{ $t('repair.address') }}
            </div>
          </template>
          {{ item.address }}
        </el-descriptions-item>
      </el-descriptions>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ElIcon, ElDescriptions, ElDescriptionsItem } from 'element-plus'

const locale = useCookie('locale')
const repairSitesList = computed(() => {
  switch (locale.value) {
    case 'cn':
      return repairSitesListCN
    case 'ru':
      return repairSitesListRU
    default:
      return repairSitesListEN
  }
})
const repairSitesListCN = [
  {
    city: '中东迪拜',
    contact: '甘创',
    address: '迪拜，Al Quoz 4，21街，13栋',
    telephone: '+971 58 591 68091111111111111111111111111111111111',
  },
  {
    city: '美国德克萨斯',
    contact: '菲利普',
    address: '美国德克萨斯州休斯顿哈文区10611号  邮编：77036',
    telephone: '+1 512 549 1148',
  },
  {
    city: '俄罗斯莫斯科',
    contact: 'ИП Турчанинов Степан Сергеевич',
    address: 'г. Москва, Шмитовский проезд 34 стр.10 ',
    telephone: '+7 (909) 153-71-11',
  },
  {
    city: '俄罗斯莫斯科',
    contact: 'ИП Турчанинов Степан Сергеевич',
    address: 'г. Санкт-Петербург, Верейская 45',
    telephone: '+7 (916) 931-92-77',
  },
  {
    city: '俄罗斯莫斯科',
    contact: 'ИП Турчанинов Степан Сергеевич',
    address: 'г. Иркутск, ул. Байкальская 157/1',
    telephone: '+7 (964) 230-43-03',
  },
  {
    city: '中国. 深圳',
    contact: '刘朋',
    address: '深圳市龙岗区南湾街道日塑工业城a栋406仓库',
    telephone: '+86 15198246884',
  },
]

const repairSitesListEN = [
  {
    city: 'Dubai,UAE',
    contact: 'Ashley Gan',
    address: 'Villa 13， 21street，Al Quoz 4，Dubai',
    telephone: '+971 58 591 6809',
  },
  {
    city: 'Texas,USA',
    contact: 'Philip',
    address: '10611 Harwin Dr., Suite 400, Houston, TX 77036',
    telephone: '+1 512 549 1148',
  },
  {
    city: 'Moscow，Russia',
    contact: 'ИП Турчанинов Степан Сергеевич',
    address: 'г. Москва, Шмитовский проезд 34 стр.10 ',
    telephone: '+7 (909) 153-71-11',
  },
  {
    city: 'Moscow，Russia',
    contact: 'ИП Турчанинов Степан Сергеевич',
    address: 'г. Санкт-Петербург, Верейская 45',
    telephone: '+7 (916) 931-92-77',
  },
  {
    city: 'Moscow，Russia',
    contact: 'ИП Турчанинов Степан Сергеевич',
    address: 'г. Иркутск, ул. Байкальская 157/1',
    telephone: '+7 (964) 230-43-03',
  },
  {
    city: 'Shenzhen,China',
    contact: 'Peng Liu',
    address: '406, Building A, Risu Industrial City, Nanwan Street, Longgang District, Shenzhen',
    telephone: '+86 15198246884',
  },
]

const repairSitesListRU = [
  {
    city: 'Ближний Восток Дубай',
    contact: 'Ashley Gan',
    address: 'Вилла 13, 21 женщина, Al Quoz 4, Дубай',
    telephone: '+971 58 591 6809',
  },
  {
    city: 'Техас, США',
    contact: 'Philip',
    address: '10611 Доктор Харвин, Люкс 400, Хьюстон, Техас 77036',
    telephone: '+1 512 549 1148',
  },
  {
    city: 'Москва, Россия',
    contact: 'ИП Турчанинов Степан Сергеевич',
    address: 'г. Москва, Шмитовский проезд 34 стр.10 ',
    telephone: '+7 (909) 153-71-11',
  },
  {
    city: 'Москва, Россия',
    contact: 'ИП Турчанинов Степан Сергеевич',
    address: 'г. Санкт-Петербург, Верейская 45',
    telephone: '+7 (916) 931-92-77',
  },
  {
    city: 'Москва, Россия',
    contact: 'ИП Турчанинов Степан Сергеевич',
    address: 'г. Иркутск, ул. Байкальская 157/1',
    telephone: '+7 (964) 230-43-03',
  },
  {
    city: 'Китай , Шеньжень ',
    contact: 'Peng Liu',
    address:
      'Склад 406, корпус А, промышленный город Рису, улица Наньвань, район Лунган, Шэньчжэнь',
    telephone: '+86 15198246884',
  },
]
</script>

<style lang="less" scoped>
section {
  width: 1080px;
  margin: 0 auto 50px;
  padding-top: 50px;
}

.el-descriptions {
  margin-top: 20px;
}

.cell-item {
  display: flex;
  align-items: center;
}

.el-icon {
  margin-bottom: 2px;
}

@media (max-width: 1024px) {
  section {
    width: 100%;
  }
}
</style>
