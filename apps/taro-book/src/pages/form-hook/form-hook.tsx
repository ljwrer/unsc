import { Input, Label, Picker, View } from '@tarojs/components'
import styles from './form-hook.module.scss'
import dayjs from 'dayjs'
import {
  useInput,
  useForValueOptions,
  useForObjectOptions,
  useDatePicker,
  useRegionCode,
  useRegionValue,
  useRegionAll,
} from '@cf/taro-form-hook'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store/store'

definePageConfig({
  navigationBarTitleText: 'Form-Hook',
})

const FormHookPage = observer(() => {
  const { formStore } = useStore()

  const {
    inputObj,
    objlist,
    list,
    singleListObj,
    simpleValue,
    date,
    regionValue,
    regionCode,
    regionAll,
  } = formStore
  return (
    <View className={styles.content}>
      <View className={styles.title}>了解一下Form表单相关的Hook</View>

      <View className={styles.block}>
        <View className={styles.blockTitle}>输入框</View>
        <Input
          placeholder="请输入文本"
          className={styles.formInput}
          {...useInput(inputObj, 'name')}
        />
        <View className={styles.blockTitle}>结果</View>
        <View className={styles.result}>{inputObj.name}</View>
      </View>

      <View className={styles.block}>
        <View className={styles.blockTitle}>单选-简单对象</View>
        <Picker
          {...useForValueOptions(formStore, 'simpleValue', list)}
          mode="selector"
        >
          <View className={styles.formItem}>
            <Label>请选择</Label>
          </View>
        </Picker>
        <View className={styles.blockTitle}>结果</View>
        <View className={styles.result}>{simpleValue}</View>
      </View>

      <View className={styles.block}>
        <View className={styles.blockTitle}>单选-复杂对象</View>
        <Picker
          {...useForObjectOptions(
            singleListObj,
            'selectValue',
            objlist,
            'name',
            'name'
          )}
          mode="selector"
        >
          <View className={styles.formItem}>
            <Label>请选择</Label>
          </View>
        </Picker>
        <View className={styles.blockTitle}>结果</View>
        <View className={styles.result}>{singleListObj.selectValue}</View>
      </View>

      <View className={styles.block}>
        <View className={styles.blockTitle}>日期</View>
        <Picker
          {...useDatePicker(formStore, 'date', 'YYYY-MM-DD')}
          mode="date"
          fields="day"
          start={dayjs().format('YYYY-MM-DD')}
        >
          <View className={styles.formItem}>
            <Label>请选择</Label>
          </View>
        </Picker>
        <View className={styles.blockTitle}>结果</View>
        <View className={styles.result}>{date}</View>
      </View>

      <View className={styles.block}>
        <View className={styles.blockTitle}>地区-返回Value</View>
        <Picker {...useRegionValue(formStore, 'regionValue')} mode="region">
          <View className={styles.formItem}>
            <Label>请选择</Label>
          </View>
        </Picker>
        <View className={styles.blockTitle}>结果</View>
        <View className={styles.result}>{regionValue.join('/')}</View>
      </View>

      <View className={styles.block}>
        <View className={styles.blockTitle}>地区-返回Code</View>
        <Picker {...useRegionCode(formStore, 'regionCode')} mode="region">
          <View className={styles.formItem}>
            <Label>请选择</Label>
          </View>
        </Picker>
        <View className={styles.blockTitle}>结果</View>
        <View className={styles.result}>{regionCode.join('-')}</View>
      </View>

      <View className={styles.block}>
        <View className={styles.blockTitle}>地区-返回Code和Value</View>
        <Picker {...useRegionAll(regionAll, 'code', 'value')} mode="region">
          <View className={styles.formItem}>
            <Label>请选择</Label>
          </View>
        </Picker>
        <View className={styles.blockTitle}>结果</View>
        <View className={styles.result}>code:{regionAll.code.join('-')}</View>
        <View className={styles.result}>value:{regionAll.value.join('/')}</View>
      </View>
    </View>
  )
})

export default FormHookPage
