import * as Location from "expo-location"
import { PermissionStatus } from "@/infraestructure/interfaces/location"
import { Alert, Linking } from "react-native"

//Lanzar la ventana que dice, necesita tu ubicacion, solo para revisar
export const requestLocationPermission =
   async (): Promise<PermissionStatus> => {
      const { status } = await Location.requestForegroundPermissionsAsync()

      if (status !== "granted") {
         
         if(status === 'denied'){
            manualPermissionRequest()
         }

         return PermissionStatus.DENIED
      }

      return PermissionStatus.GRANTED
   }

export const checkLocationPermission = async () => {
   const { status } = await Location.getForegroundPermissionsAsync()

   switch (status) {
      case "granted":
         return PermissionStatus.GRANTED
      case "denied":
         return PermissionStatus.DENIED
      default:
         return PermissionStatus.UNDETERMINED
   }
}

const manualPermissionRequest = async () => {
   //TODO: Lanzar los ajustes de la aplicacion

   Alert.alert(
      'Permiso de ubicación necesario',
      "Para continuar debe habilitar el permiso de location",
      [
         {
            text: "Abrir ajustes",
            onPress: () => {
               Linking.openSettings()
            }
         },
         {
            text: "Cancel",
            style: "destructive"
         }
      ]
   )
}
