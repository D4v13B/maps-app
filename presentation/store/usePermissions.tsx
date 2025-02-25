import { checkLocationPermission, requestLocationPermission } from '@/core/actions/permissioons/location'
import { PermissionStatus } from '@/infraestructure/interfaces/location'
import {create} from 'zustand'

interface PermissionState {
   locationStatus: PermissionStatus

   requestLocationPermission: () => Promise<PermissionStatus>
   checkLocationPermission: () => Promise<PermissionStatus>
}


export const usePermissionsStore = create<PermissionState>()((set) =>({
   locationStatus: PermissionStatus.CHECKING,

   requestLocationPermission: async() => {
      const status = await requestLocationPermission()

      set({locationStatus: status})

      return status
   },

   checkLocationPermission: async() => {

      const status = await checkLocationPermission();

      set({locationStatus: status})

      return status
   }
}))