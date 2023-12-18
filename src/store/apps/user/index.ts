import { createSelector, createSlice } from '@reduxjs/toolkit'
import i18next from 'i18next'

const initialState = {
  user: {
    loading: true,
    roles: []
  },
  notifyToken: null,
  categoryList: [],
  settings: {}
}

const appUsersSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeLanguage(state, { payload }) {
      i18next.changeLanguage(payload)
    },
    updateUser(state, { payload }) {
      let newUser
      if (!payload || typeof payload !== 'object') {
        newUser = {}
      } else {
        newUser = { ...payload }
      }
      newUser.name = newUser.name ? newUser.name : `${newUser.lastname} ${newUser.firstname}`
      newUser.time = new Date().getTime()
      if (!newUser.roles) {
        newUser.roles = []
      }
      if (newUser.roles[0]?.id) {
        newUser.rolesFull = newUser.roles
        newUser.roles = newUser.roles.map((r: { id: any }) => r.id)
      }
      localStorage.setItem('userData', JSON.stringify(newUser))
      newUser.adminProvinceId = newUser?.department?.provinceId
      newUser.isAdminProvince = !!newUser.adminProvinceId
      state.user = newUser
    },
    changeStatus(state, { payload }) {
      // @ts-ignore
      state.user.statusACCOUNT = payload
    },
    updateNotifyToken(state, { payload }) {
      state.notifyToken = payload
    },
    initCategoryList(state, { payload }) {
      state.categoryList = payload
    },
    updateSetting(state, { payload }) {
      Object.assign(state.settings, payload)
    }
  }
})

export const appActions = appUsersSlice.actions

const stateApp = (state: { app: any }) => state.app
const selectLanguage = createSelector(stateApp, app => app.lng)
const selectUser = createSelector(stateApp, app => app.user)
const selectSetting = createSelector(stateApp, app => app.settings)
const selectNotifyToken = createSelector(stateApp, app => app.notifyToken)
const selectCategoryState = createSelector(stateApp, app => ({
  categoryList: app.categoryList
}))

export const appSelects = {
  selectLanguage,
  selectUser,
  selectNotifyToken,
  selectCategoryState,
  selectSetting
}

export default appUsersSlice.reducer
