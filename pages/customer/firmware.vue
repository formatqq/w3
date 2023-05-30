<template>
  <div class="common-container">
    <section>
      <h1 class="title">{{ $t('firmware.title') }}</h1>
      <div class="button-bar d-flex">
        <a
          href="/file/upgrade_altcoin_ltc_D10.tar.gz"
          class="d-flex-center"
          >{{ $t('firmware.upgrade') }}</a
        >
        <a
          href="/file/D10+_SD_Card_Firmware.zip"
          class="d-flex-center"
          >{{ $t('firmware.card') }}</a
        >
        <a
          :href="locale === 'en' ? '/file/D10+_User_Guide.pdf' : '/file/D10+_User_Guide.docx'"
          class="d-flex-center"
          >{{ $t('firmware.guide') }}</a
        >
      </div>

      <el-table
        :data="tableData"
        border
        style="width: 100%"
      >
        <el-table-column
          prop="name"
          :label="$t('firmware.name')"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="size"
          :label="$t('firmware.file')"
          width="160"
        >
        </el-table-column>
        <el-table-column
          prop="description"
          :label="$t('firmware.description')"
        >
        </el-table-column>
        <el-table-column
          prop="time"
          :label="$t('firmware.date')"
          width="200"
        >
        </el-table-column>
        <el-table-column
          :label="$t('firmware.action')"
          width="100"
          align="center"
        >
          <template #default="scope">
            <el-button
              class="action-button"
              @click="download(scope.row.link)"
            >
              <el-icon>
                <Download />
              </el-icon>
            </el-button>
            <el-button
              class="action-button"
              @click="share(scope.row.link)"
            >
              <el-icon>
                <Share />
              </el-icon>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { ElIcon, ElButton, ElTable, ElTableColumn, ElMessage } from 'element-plus'

const locale = useCookie('locale')

const i18n = useI18n()

const tableData = [
  {
    name: i18n.t('firmware.download01.name'),
    description: i18n.t('firmware.download01.description'),
    size: '1.5MB',
    time: '2022-12-29',
    link: locale.value === 'cn' ? '/file/D10+_User_Guide.docx' : '/file/Manual Guide230506.docx',
  },
  {
    name: i18n.t('firmware.download02.name'),
    description: i18n.t('firmware.download02.description'),
    size: '19MB',
    time: '2022-12-29',
    link: '/file/D10+_Firmware_upgrade_altcoin_ltc-A2-108_rootfs-D10_20221229.tar.gz',
  },
  {
    name: i18n.t('firmware.download02.name'),
    description: i18n.t('firmware.download02.description'),
    size: '20MB',
    time: '2023-04-03',
    link: '/file/upgrade_altcoin_ltc_D10.tar.gz',
  },
  {
    name: i18n.t('firmware.download03.name'),
    description: i18n.t('firmware.download03.description'),
    size: '37.8MB',
    time: '2022-12-29',
    link: '/file/D10+_SD_Card_Firmware.zip',
  },
  {
    name: i18n.t('firmware.download04.name'),
    description: i18n.t('firmware.download04.description'),
    size: '0.6MB',
    time: '2023-05-06',
    link: locale.value === 'cn' ? '/file/Release-D10-CN.zip' : '/file/Release-D10-EN.zip',
  },
]

const download = (link: string) => {
  const a = document.createElement('a')
  a.href = link
  a.click()
}

const share = async (link: string) => {
  try {
    navigator.clipboard.writeText(window.location.host + link)
    ElMessage({
      message: i18n.t('common.share'),
      type: 'success',
      offset: 200,
      center: true,
    })
  } catch (e) {
    console.log(e)
  }
}
</script>

<style lang="less" scoped>
section {
  width: 1080px;
  margin: 0 auto 50px;
  padding-top: 50px;

  .title {
    width: fit-content;
    font-size: 24px;
    margin-bottom: 40px;
  }

  .button-bar {
    margin-bottom: 40px;

    a {
      width: 150px;
      height: 40px;
      margin-right: 20px;
      text-align: center;
      color: #fff;
      border-radius: 4px;
      background-color: @main-color;

      &:hover {
        background-color: fade(@main-color, 80%);
      }
    }
  }
}

.action-button {
  width: 50px;
  height: 25px;
  margin: 2px auto;
}

@media (max-width: 1024px) {
  section {
    width: 100%;
  }
}
</style>
