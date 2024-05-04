<template>
  <onlyoffice-editor :loading="loading.editor" :config="editorConfig">
    <span slot="actions">
      <a-button type="primary" @click="onSave" :loading="loading.save">保存</a-button>
    </span>
  </onlyoffice-editor>
</template>

<script>
import OnlyofficeEditor from './modules/onlyoffice-editor'
import { queryDocumentInfo, forceSaveDocumentInfo } from '@/api/onlyoffice'

export default {
  data() {
    return {
      loading: {
        editor: false,
        save: false,
        forceSave: false
      },
      detail: {},
      editorConfig: {},
      // 需要互联网加载的url
      fullUrl: "https://ideafusion.oss-accelerate.aliyuncs.com/dev/admin/sass/0.5971762278810782/2024226/%E4%BE%9B%E5%BA%94%E5%95%86%E6%B6%88%E6%81%AF%E9%80%9A%E7%9F%A5%E4%B8%89-888.docx"
    }
  },
  components: {
    OnlyofficeEditor
  },
  created() {
    this.queryDocumentInfo()
  },
  methods: {
    // 获取文档配置信息
    queryDocumentInfo() {
      this.loading.editor = true
      queryDocumentInfo({ key: 'test4.docx', useJwtEncrypt: 'y', fullUrl: this.fullUrl })
        .then(res => {
          const data = res.data || {}
          const { id, remarks } = data
          this.detail = { id, remarks }
          this.editorConfig = data.editorConfig
        })
        .finally(() => {
          this.loading.editor = false
        })
    },
    // 保存
    onSave() {
      this.loading.forceSave = true
      const { key } = this.editorConfig.document
      const { id } = this.detail
      // 如果开启了 JWT 加密，useJwtEncrypt 字段要传递 y
      forceSaveDocumentInfo({ id, key, useJwtEncrypt: 'y' })
        .then(res => {
          if (res.code === 0) {
            this.$message.success('保存成功')
          } else {
            this.$message.error(res.message)
          }
        })
        .finally(() => {
          this.loading.forceSave = false
        })
    }
  }
}
</script>
