import { PropsWithChildren, useEffect } from "react"
import { AppState } from "react-native"
import { router } from "expo-router"

import { PermissionStatus } from "@/infraestructure/interfaces/location"

import { usePermissionsStore } from "../store/usePermissions"

const PermissionCheckerProvider = ({ children }: PropsWithChildren) => {
   const { locationStatus, checkLocationPermission } = usePermissionsStore()

   useEffect(() => {
      if (locationStatus === PermissionStatus.GRANTED) {
         router.replace("/map")
      } else if (locationStatus !== PermissionStatus.CHECKING) {
         router.replace("/permisions")
      }
   }, [locationStatus])

   useEffect(() => {
      checkLocationPermission()
   }, [])

   //TODO: Estar pendiente cuando el estado de la aplicacion cambia
   useEffect(() => {

      const subscription = AppState.addEventListener('change', (nextAppState) => {

         if(nextAppState == 'active'){
            checkLocationPermission()
         }
      })

      return () => {
         subscription.remove()
      }

   }, [])

   return <>{children}</>
}
export default PermissionCheckerProvider