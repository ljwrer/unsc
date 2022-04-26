import { makeAutoObservable } from 'mobx'

class FormStore {
  inputObj = {
    name: 'lzf',
  }

  objlist = [
    {
      id: 1,
      name: '苹果',
    },
    {
      id: 2,
      name: '香蕉',
    },
    {
      id: 3,
      name: '橘子',
    },
    {
      id: 4,
      name: '菠萝',
    },
  ]

  list = ['小米', '苹果', '三星', 'VIVO']

  regionCode = []

  regionValue = []

  regionAll = {
    code: [],
    value: [],
  }

  singleListObj = {
    selectValue: '',
  }

  simpleValue = ''

  date = ''

  constructor() {
    makeAutoObservable(this)
  }
}

export const formStore = new FormStore()
